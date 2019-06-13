import {FinWindow, WindowOptions } from '../GlobalTypes';

import { initState as globalInitState } from '../init';

import { initState } from './init';

import {
    IRectangle, IDockingOptions,
    GroupEventReason,
} from './DockingType';

import {
    getSnapDirection, intersect, isInView, isGroupInView,
} from './DockingUtil'

import DockingGroup from './DockingGroup';
import LocalStoragePersistence from './LocalStoragePersistence';

const openDockableWindows = {};

async function regroup(
    persistenceService:LocalStoragePersistence,
    allWindowsToRegroup : DockingWindow[],
    previousWindow: DockingWindow, currentWindow:DockingWindow, isNewGroup:boolean
) {
    // console.warn(`Regroup ${currentWindow.name}`); // eslint-disable-line no-undef, no-console

    const currentWindowIndex = allWindowsToRegroup.indexOf(currentWindow);
    if (currentWindowIndex === -1) {
        return; // already traversed
    }

    // Important, get orig partnerships, before leave/join group destroys them below
    const partnerWindowNames = persistenceService.retrieveRelationshipsFor(currentWindow.name);

    // remove this window now from pending list, we should not be visiting it again
    allWindowsToRegroup.splice(currentWindowIndex, 1);

    // if this is a lone window, then leave group
    // do not trigger any additional split-checking, normal checks for off-screen etc.
    if (!previousWindow && partnerWindowNames.length === 0) {
        await currentWindow.leaveDockingGroup();
        return;
    }

    if (isNewGroup) {
        await currentWindow.leaveDockingGroup(false);
        if (previousWindow) {
            // join previous partner window in new group
            currentWindow.joinDockingGroup(previousWindow);
        }
    }

    // console.warn(`handlePartners for ${currentWindow.name}: ${partnerWindowNames}`); // eslint-disable-line no-undef, no-console
    for (const partnerWindowName of partnerWindowNames) {
        const partnerWindow = DockingWindow.getWindowByName(allWindowsToRegroup, partnerWindowName);
        if (partnerWindow) {
            // we want to serialise these operations, so await in this loop is fine
            await regroup(persistenceService, allWindowsToRegroup, currentWindow, partnerWindow, isNewGroup);
        }
    }
}

async function checkForSplitGroup(
    persistenceService:LocalStoragePersistence, dockingGroup:DockingGroup
) {
    if (dockingGroup.children.length < 2) {
        return;
    }

    // console.warn(`checkForSplitGroup ${dockingGroup.children.length}`);

    let existingDockingGroup = dockingGroup;
    const windowsToRegroup = existingDockingGroup.children.concat();

    // loop, until no windows left to (re)group ....

    while (windowsToRegroup.length > 0) {
        const [startWindow] = windowsToRegroup;
        // we actively want to serialise these operations, so parallelizing is _not_ what we want
        // eslint-disable-next-line no-await-in-loop
        await regroup(persistenceService, windowsToRegroup, null, startWindow, !existingDockingGroup);

        if (existingDockingGroup && startWindow.group) {
            existingDockingGroup = null;
        }
    }
}

export type DockingWindowOnMoveEvent ={
    target: DockingWindow,
    preventDefault:boolean,
    bounds:{
        x:number,
        y:number,
        width:number,
        height:number,
        changedWidth:number,
        changedHeight:number,
    }
}

export type DockingWindowOnCloseEvent={
    target: DockingWindow
}

export default class DockingWindow implements IRectangle, IDockingOptions {

    static getWindowByName(windowList:DockingWindow[], windowName:string):DockingWindow {
        let found:DockingWindow = null;
        if (windowList && windowName){
            for (let i = 0; i< windowList.length; i++){
                if (windowList[i].name === windowName){
                    found = windowList[i];
                    break;
                }
            }
        }
        return found;
    }

    name:string;
    range:number = 40;
    spacing:number;
    undockOffsetX:number;
    undockOffsetY:number;
    x:number;
    y:number;
    width:number;
    height:number;
    currentRange:number;

    originalOpacity:number = 1;
    movingOpacity:number = 1;
    snappedMovingOpacity:number;
    snappedTargetOpacity:number;
    acceptDockingConnection:boolean = true;
    dockableToOthers:boolean;
    unregisterOnClose:boolean;
    minimized:boolean= false;
    openfinWindow:FinWindow;

    group:DockingGroup = null;


    constructor(finWindow:FinWindow, options:IDockingOptions) {
        this.name = finWindow.name;
        this.openfinWindow = finWindow;

        (async ()=>{
            const winOptions = await this.openfinWindow.getOptions();
            this.hanldeWindowOptions(winOptions);
            // todo dbl check, we should not need ot init the window listener again, since they have already been done in hanldeWindowOptions
            // await this.openfinWindow.addListener('initialized',()=>{this.handleWindowInitialized()})
        })().catch(e=>{
            // eat the exception
        })

        this.range = options.range;
        this.spacing = options.spacing;
        this.undockOffsetX = options.undockOffsetX;
        this.undockOffsetY = options.undockOffsetY;
        this.movingOpacity = options.movingOpacity;
        this.snappedMovingOpacity = options.snappedMovingOpacity;
        this.snappedTargetOpacity = options.snappedTargetOpacity;
        this.dockableToOthers = options.dockableToOthers;
        this.unregisterOnClose = options.unregisterOnClose;

        this.currentRange = this.range;

    }

    // start of Docking manager binder plz holders
    onMove:(event:DockingWindowOnMoveEvent)=>void;
    onMoveComplete:(...args:any[])=>void;
    onFocus:(event:DockingWindow)=>void;
    onRestore:(event:DockingWindow)=>void;
    onMinimize:(event:DockingWindow)=>void;
    onLeaveGroup:(windowName:string)=>void;
    onClose:(event:DockingWindowOnCloseEvent)=>void;
    // end of Docking manager binder plz holders

    hanldeWindowOptions = (windowOptions:WindowOptions)=>{
        // make note of opacity for this existing window, set as original
        this.originalOpacity = windowOptions && windowOptions.opacity ?windowOptions.opacity:this.originalOpacity;
        this.handleWindowInitialized().catch(e=> {});
    }

    handleWindowInitialized = async ()=>{
        // OpenFin window close triggers a 'hidden' event, so do not tie minimize action to this event

        const bounds = await this.openfinWindow.getBounds();
        this.completeInitialization(bounds);

        await this.openfinWindow.disableUserMovement();
        await this.openfinWindow.addListener('disabled-frame-bounds-changing', this.handleBoundsChanging);
        await this.openfinWindow.addListener('disabled-frame-bounds-changed', this.handleBoundsChanged);
        await this.openfinWindow.addListener('bounds-changed', this.handleBoundsUpdate);
        await this.openfinWindow.addListener('closed', this.handleClosed);
        await this.openfinWindow.addListener('minimized', this.handleMinimized);
        await this.openfinWindow.addListener('restored', this.handleRestored);
        await this.openfinWindow.addListener('shown', this.handleRestored);
        await this.openfinWindow.addListener('focused', this.handleFocused);
        await this.openfinWindow.addListener('group-changed', this.handleGroupChanged);
    }

    completeInitialization = (initialWindowBounds)=>{
        this.handleBoundsUpdate(initialWindowBounds);
        openDockableWindows[this.name] = this;

        const formerDockingPartners = initState.persistenceService.retrieveRelationshipsFor(this.name);
        for (let i = 0; i < formerDockingPartners.length; i++) {
            const potentialPartnerName = formerDockingPartners[i];
            const potentialPartnerWindow = openDockableWindows[potentialPartnerName];

            if (!potentialPartnerWindow ||
                !getSnapDirection(this, potentialPartnerWindow) &&
                !getSnapDirection(potentialPartnerWindow, this)) {
                // garbage collection, essentially
                // note, if a former partner has not been opened yet, then re-connecting
                // that pair of windows will be handled by that window's persisted relationships
                initState.persistenceService.removeRelationship(this.name, potentialPartnerName);
            } else {
                this.joinDockingGroup(potentialPartnerWindow);
            }
        }
    }

    handleBoundsUpdate = (bounds) => {
        this.x = bounds.left;
        this.y = bounds.top;
        this.width = bounds.width;
        this.height = bounds.height;
    }


    setOpacity = (value)=>{
        this.openfinWindow.updateOptions({
            opacity: value
        }).catch((e)=>{});
    }

    resetOpacity = ()=>{
        this.openfinWindow.updateOptions({
            opacity: this.originalOpacity
        }).catch((e)=>{});
    }

    minimize = ()=>{
        if (this.minimized) {
            return;
        }
        this.openfinWindow.minimize().catch((e)=>{});
    }

    restore = ()=>{
        if (!this.minimized) {
            return;
        }
        this.openfinWindow.restore().catch((e)=>{});
    }

    handleBoundsChanging = (bounds) => {
        const event:DockingWindowOnMoveEvent = {
            target: this,
            preventDefault: false,
            bounds: {
                x: bounds.left,
                y: bounds.top,
                width: this.width,
                height: this.height,
                changedWidth: bounds.width,
                changedHeight: bounds.height
            }
        };

        if (this.onMove){
            this.onMove(event);
        }

        if (event.preventDefault) {
            return;
        }

        if (!this.group) {
            this.setOpacity(this.movingOpacity);
        }

        this.moveTo(bounds.left, bounds.top, bounds.width, bounds.height);
    }

    moveTo = (x:number, y:number, width?:number, height?:number) => {
        this.x = x;
        this.y = y;
        this.width = width || this.width;
        this.height = height || this.height;

        this.openfinWindow.removeListener('disabled-frame-bounds-changing', this.handleBoundsChanging)
            .catch(e => {})
        ;
        this.openfinWindow.setBounds({left:x, top:y, width:this.width, height:this.height})
            .then(()=>{
                this.handleMoved()
            });
    }

    handleBoundsChanged = ()=>{
        this.resetOpacity();
        if (this.onMoveComplete){
            this.onMoveComplete({target: this});
        }
    }

    handleMoved = ()=>{
        this.openfinWindow.addListener('disabled-frame-bounds-changing', this.handleBoundsChanging)
            .catch(e => {})
        ;
    }

    handleClosed = ()=>{
        if (this.onClose){
            this.onClose({target: this});
        }
    }

    handleFocused = ()=>{
        if (this.onFocus){
            this.onFocus(this);
        }
    }

    handleMinimized = ()=>{
        this.minimized = true;
        if (this.onMinimize){
            this.onMinimize(this);
        }
    }

    handleRestored = ()=>{
        this.minimized = false;
        if (this.onRestore){
            this.onRestore(this);
        }
    }

    handleGroupChanged = (groupEvent)=>{
        if (
            groupEvent.reason === GroupEventReason.LEAVE &&
            groupEvent.sourceWindowName === this.name &&
            this.onLeaveGroup
        ) {
            this.onLeaveGroup(this.name);
        }
    }




    joinDockingGroup= (snappedPartnerWindow:DockingWindow)=>{
        if (!this.dockableToOthers || !snappedPartnerWindow.acceptDockingConnection) {
            return;
        }

        if (snappedPartnerWindow.group) {
            if (this.group) {
                // as we do not currently allow group to group docking, short-circuit out
                // otherwise we would need to do mergeGroup here
                // e.g. if we inserted a window between 2 groups to 'join' them
                return;
            }

            for (let i = 0; i < snappedPartnerWindow.group.children.length; i++) {
                if (intersect(this, snappedPartnerWindow.group.children[i])) {
                    return;
                }
            }
        } else {
            if (this.group) {
                snappedPartnerWindow.joinDockingGroup(this);
                return;
            }
        }

        // openfin operations: frame and grouping
        // if both ungrouped, this will set up the initial group with both windows as members
        this.openfinWindow.enableUserMovement()
            .catch(e => {})
        ;
        snappedPartnerWindow.openfinWindow.enableUserMovement()
            .catch(e => {})
        ;
        this.openfinWindow.joinGroup(snappedPartnerWindow.openfinWindow)
            .catch(e => {})
        ;

        if (!this.group && !snappedPartnerWindow.group) {
            // both ungrouped .. set partner up with new group
            const dockingGroup = new DockingGroup();
            dockingGroup.add(snappedPartnerWindow);
            globalInitState.fin.InterApplicationBus.publish('window-docked', {windowName: snappedPartnerWindow.name})
                .catch(e => {})
        }

        snappedPartnerWindow.group.add(this);
        globalInitState.fin.InterApplicationBus.publish('window-docked', {windowName: this.name})
            .catch(e => {})

        initState.persistenceService.createRelationshipsBetween(this.name, snappedPartnerWindow.name);
    }

    leaveDockingGroup =  async (isInitiator?:boolean) => {
        const {group} = this;
        if (!group) {
            return;
        }

        // disconnect from docking group as soon as possible to avoid
        // any interference in leaveGroup handling
        group.remove(this);

        await this.openfinWindow.disableUserMovement();
        // detach window from OpenFin runtime group
        try {
            await this.openfinWindow.leaveGroup();
        } catch (err) {
            // do not need further action here, this is likely due to a close, and window is gone
        }

        await globalInitState.fin.InterApplicationBus.publish('window-undocked', {windowName: this.name});

        if (isInitiator) {
            // if this window initiated the undock procedure, move apart slightly from group
            await this.openfinWindow.moveBy(this.undockOffsetX, this.undockOffsetY);
        }
        else if (!isInView(this, initState.monitors)) {
            // if indirectly undocked e.g. last window in group
            this.moveTo(0, 0, this.width, this.height);
        }

        if (group.children.length === 1) {
            await group.children[0].leaveDockingGroup();
        }

        if (group.children.length > 0 && !isGroupInView(group.children, initState.monitors)) {
            group.children[0].moveTo(0, 0);
        }

        initState.persistenceService.removeAllRelationships(this.name);

        if (isInitiator) {
            await checkForSplitGroup(initState.persistenceService, group);
        }
    }


}