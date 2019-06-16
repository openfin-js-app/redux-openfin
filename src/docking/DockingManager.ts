import {LegacyFinWindow} from '../GlobalTypes'

import
    DockingWindow,
{
    DockingWindowOnCloseEvent, DockingWindowOnMoveEvent,
} from './DockingWindow';

import {IDockingOptions, IRectangle} from './DockingType';

import {initState} from './init';

import {
    getSnapDirection, reverseSnapDirection, getSnappedCoordinates,
} from './DockingUtil';

export default class DockingManager implements IDockingOptions{

    dockableToOthers: boolean;
    movingOpacity: number;
    range: number;
    snappedMovingOpacity: number;
    snappedTargetOpacity: number;
    spacing: number;
    undockOffsetX: number;
    undockOffsetY: number;
    unregisterOnClose: boolean;

    windows:DockingWindow[]=[];
    snappedWindows:{[key:string]:[DockingWindow,DockingWindow]} = {};

    constructor(dockingOptions:IDockingOptions){
        Object.assign(this,dockingOptions);
    }

    register = (window:LegacyFinWindow, dockableToOthers?:boolean)=>{
        if (this.windows.some(registeredWindow => registeredWindow.name === window.name)) {
            return;
        }

        const dockingOptions = {...initState.options};
        dockingOptions.dockableToOthers = dockableToOthers !==false;

        const dockingWindow = new DockingWindow(window, dockingOptions);

        dockingWindow.onMove = this.handleWindowMove;
        dockingWindow.onMoveComplete = this.dockAllSnappedWindows;
        dockingWindow.onFocus = this.bringWindowOrGroupToFront;
        dockingWindow.onRestore = this.handleWindowRestore;
        dockingWindow.onMinimize = this.handleWindowMinimize;
        dockingWindow.onLeaveGroup = this.undockWindow;
        if (initState.options.unregisterOnClose){
            dockingWindow.onClose = this.handleWindowClose;
        }
        this.windows.push(dockingWindow);

    }

    unregister = (window:DockingWindow) => {
        this.unregisterByName(window.name);
    }

    unregisterByName = (windowName:string) => {
        const existingWindowIdx = this.windows.findIndex(window => window.name === windowName);
        if (existingWindowIdx > -1) {
            const [removedDockableWindow] = this.windows.splice(existingWindowIdx, 1);
            // purge from DockableGroup etc., otherwise it will still influence other DockableWindows
            removedDockableWindow.leaveDockingGroup(true);
        }
    }

    undockAll = () => {
        for (const dockingWindow of this.windows) {
            dockingWindow.leaveDockingGroup();
        }
    }

    handleWindowClose = (event:DockingWindowOnCloseEvent)=>{
        this.unregister(event.target);
    };
    bringWindowOrGroupToFront = (dockingWindow:DockingWindow)=>{
        if (dockingWindow.group) {
            for (const groupDockingWindow of dockingWindow.group.children) {
                groupDockingWindow.openfinWindow.bringToFront();
            }
        }
        dockingWindow.openfinWindow.bringToFront();
    };
    handleWindowRestore = (dockingWindow:DockingWindow)=>{
        if (!dockingWindow.group) {
            return;
        }

        for (const groupedDockingWindow of dockingWindow.group.children) {
            groupedDockingWindow.restore();
        }
    };
    handleWindowMinimize = (dockingWindow:DockingWindow)=>{
        if (!dockingWindow.group) {
            return;
        }

        for (const groupedDockingWindow of dockingWindow.group.children) {
            groupedDockingWindow.minimize();
        }
    };
    handleWindowMove = (event:DockingWindowOnMoveEvent)=>{
        const currentWindow = event.target;
        if (currentWindow.group) {
            return;
        }

        const windowInfo:IRectangle&{currentRange:number} = Object.assign(
            {
                currentRange: currentWindow.currentRange
            },
            event.bounds
        );

        const position = {
            x: null,
            y: null
        };

        for (let i = this.windows.length - 1; i >= 0; i--) {
            const dockableWindow = this.windows[i];
            let snapDirection = getSnapDirection(windowInfo, dockableWindow);

            if (!snapDirection) {
                snapDirection = reverseSnapDirection(getSnapDirection(dockableWindow, windowInfo));
            }
            // console.log(`DockingManager::handleWindowMove${event.target.name}->${dockableWindow.name}`,snapDirection);
            if (snapDirection) {
                currentWindow.currentRange = currentWindow.range + 10;
                const pos = getSnappedCoordinates(windowInfo, currentWindow, dockableWindow, snapDirection, this.range, this.spacing);
                this.bringWindowOrGroupToFront(dockableWindow);
                // make sure current window remains on top / in focus
                currentWindow.openfinWindow.bringToFront();

                if (!position.x) {
                    position.x = pos.x;
                }

                if (!position.y) {
                    position.y = pos.y;
                }

                this.addToSnapList(currentWindow, dockableWindow);
            } else {
                currentWindow.currentRange = currentWindow.range;
                this.removeFromSnapList(currentWindow, dockableWindow);
            }
        }

        if (position.x || position.y) {
            event.preventDefault = true;

            position.x = position.x ? position.x : windowInfo.x;
            position.y = position.y ? position.y : windowInfo.y;
            currentWindow.moveTo(position.x, position.y);

            this.checkIfStillSnapped();
        }
    };
    dockAllSnappedWindows = ()=>{
        for (const snappedWindowInfo of (<any>Object).values(this.snappedWindows)) {
            this.removeFromSnapList(snappedWindowInfo[0], snappedWindowInfo[1]);
            this.addWindowToTheGroup(snappedWindowInfo[0], snappedWindowInfo[1]);
        }
    };
    undockWindow = (windowName:string) => {
        const existingWindow = DockingWindow.getWindowByName(this.windows, windowName);
        if (existingWindow) {
            existingWindow.leaveDockingGroup(true);
        }
    };
    addWindowToTheGroup = (snappedWindow:DockingWindow,groupedWindow:DockingWindow) => {
        snappedWindow.resetOpacity();
        snappedWindow.joinDockingGroup(groupedWindow);
    }


    checkIfStillSnapped =()=>{
        for (const snappedWindowInfo of (<any>Object).values(this.snappedWindows)) {
            if (snappedWindowInfo &&
                !getSnapDirection(snappedWindowInfo[0], snappedWindowInfo[1]) &&
                !getSnapDirection(snappedWindowInfo[1], snappedWindowInfo[0])) {
                this.removeFromSnapList(snappedWindowInfo[0], snappedWindowInfo[1]);
            }
        }
    }
    addToSnapList =(window1:DockingWindow, window2:DockingWindow)=>{
        this.snappedWindows[window1.name + window2.name] = [
            window1,
            window2
        ];
        window1.setOpacity(this.snappedMovingOpacity);
        window2.setOpacity(this.snappedTargetOpacity);
    }
    removeFromSnapList =(window1:DockingWindow, window2:DockingWindow)=>{
        if (this.snappedWindows[window1.name + window2.name]) {
            Reflect.deleteProperty(this.snappedWindows, window1.name + window2.name);
            window2.resetOpacity();
        }
    }

}