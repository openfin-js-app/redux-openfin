import {FinWindow} from '../GlobalTypes';

import toLegacyFinWindow from '../utils/toLegacyFinWindow';

import {
    IDockingOptions, IRectangle
} from './DockingType'

import {
    getAppId, requestMonitorInfo,
    parsePositiveInt, parseOpacity,
} from './DockingUtil';

import LocalStoragePersistence from './LocalStoragePersistence';
import DockingManager from './DockingManager';


export type State = {
    monitors:IRectangle[],
    persistenceService:LocalStoragePersistence,
    options:IDockingOptions,
    dockingManager:DockingManager,
}

const DOCKING_NAMESPACE_PREFIX = 'AL90_REDUX_OPENFIN_DOCKING::';

export const initState:State = {
    monitors:[],
    persistenceService: null,
    options:null,
    dockingManager:null,
};

const defaultDockingOptions:IDockingOptions = {
    range: 20,
    spacing: 0,
    undockOffsetX: 25,
    undockOffsetY: 25,
    movingOpacity: 0.6,
    snappedMovingOpacity: 0.8,
    snappedTargetOpacity: 1,
    dockableToOthers: true,
    unregisterOnClose: true,
};

async function initMonitorInfo(fin) {
    const monitors:IRectangle[] = await requestMonitorInfo(fin);
    for (const monitorInfo of monitors) {
        // add to monitors array, rather than replacing the ref, in case window already initialised with ref
        initState.monitors.push(monitorInfo);
    }
    
}

export default (fin,mainFinWindow:FinWindow,dockingOptions:Partial<IDockingOptions>)=>{

    const options = Object.assign(defaultDockingOptions,dockingOptions);

    initMonitorInfo(fin);

    options.range = parsePositiveInt(options.range,defaultDockingOptions.range);
    options.spacing = parsePositiveInt(options.spacing,defaultDockingOptions.spacing);
    options.undockOffsetX = parsePositiveInt(options.undockOffsetX,defaultDockingOptions.undockOffsetX);
    options.undockOffsetY = parsePositiveInt(options.undockOffsetY,defaultDockingOptions.undockOffsetY);
    options.movingOpacity = parseOpacity(options.movingOpacity,defaultDockingOptions.movingOpacity);
    options.snappedMovingOpacity = parseOpacity(options.snappedMovingOpacity,defaultDockingOptions.snappedMovingOpacity);
    options.snappedTargetOpacity = parseOpacity(options.snappedTargetOpacity,defaultDockingOptions.snappedTargetOpacity);

    initState.persistenceService = new LocalStoragePersistence(DOCKING_NAMESPACE_PREFIX+getAppId(fin));

    initState.options = options;

    initState.dockingManager = new DockingManager(options);

    // register global unDockAll hot key
    fin.desktop.GlobalHotkey.register("Shift+CommandOrControl+U",()=>{
        if (initState.dockingManager){
            initState.dockingManager.undockAll();
        }
    });

    initState.dockingManager.register(toLegacyFinWindow(mainFinWindow),false)

}