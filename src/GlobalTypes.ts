import {Store} from 'redux';
import {Action} from 'redux-actions';

export const FIN_NOT_INJECTED_MSG = 'fin handler is not injected or initialized';

export type Noop = ()=> void;
export type ErrorCallback = (error:Object) => void;

export type ActionHandlerParams ={
    fin:any,
    store:Store<any>,
    next:Function,
    action:Action<any>,
}

type FinCallback= (...args:any[])=>void;
type FinErrCallback = (reason:string|Error)=>void;

// start of window apis

export type FinWindowEvent = Object;
export type FinWindowBounds = {
    height:number,
    left:number,
    top:number,
    width:number,
    right:number,
    bottom:number,
};
export interface WindowOptions {
    accelerator:{
        devtools?:boolean,
        reload?:boolean;
        reloadIgnoringCache?:boolean;
        zoom?:boolean;
    }
    alwaysOnTop:boolean;
    autoShow:boolean;
    backgroundColor:string;
    contentNavigation:{
        whitelist?:string[];
    }
    contextMenu:boolean;
    cornerRounding:{
        height?:number;
        width?:number;
    }
    customData:string;
    customRequestHeaders:{
        urlPatterns?:string[];
        headers?:any[]
    }
    defaultCentered:boolean;
    defaultHeight:number;
    defaultLeft:number;
    defaultTop:number;
    defaultWidth:number;
    frame:boolean;
    icon:string;
    maxHeight:number;
    maximizable:boolean;
    maxWidth:number;
    minHeight:number;
    minimizable:boolean;
    minWidth:number;
    name:string;
    opacity:number;
    preloadScripts:{
        url?:string;
        mandatory?:boolean;
    }[];
    resizable:boolean;
    resizeRegion:{
        bootomRightCorner?:number;
        size?:number;
        sides?:{
            top?:boolean;
            right?:boolean;
            bottom?:boolean;
            left?:boolean;
        }
    }
    saveWindowState:boolean;
    shadow:boolean;
    showTaskbarIcon:boolean;
    smallWindow:boolean;
    state:string;
    taskbarIconGroup;string;
    url:string;
    uuid:string;
    waitForPageLoad:boolean;
}

export interface FinWindow{
    name:string;
    constructor:(
        options:{name:string},
        callback?:()=>void,
        errorCallback?:ErrorCallback,
    )=>FinWindow,
    addEventListener:(type:string,listener:(event?:any)=>void,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    bringToFront:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    close:(force?:boolean,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    disableFrame:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    enableFrame:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    focus:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    getGroup:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    getBounds:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    getState:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    getOptions:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    hide:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    joinGroup:(target:FinWindow,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    leaveGroup:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    maximize:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    mergeGroups:(target:FinWindow,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    minimize:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    moveBy:(deltaLeft:number, deltaTop:number,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    moveTo:(left:number, top:number,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    removeEventListener:(type:string,listener:(event?:any)=>void,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    restore:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    show:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    setAsForeground:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    setBounds:(left:number, top:number, width:number, height:number,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    updateOptions:(options:Partial<WindowOptions>,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
}

export interface ISetShortCutsConfig{
    desktop?:boolean,
    startMenu?:boolean,
    systemStartUp?:boolean,
}


export interface ITrayIconHoverEvent {
    x:number,
    y:number,
    bounds:{
        height:number,
        width:number,
        x:number,
        y:number,
    },
    monitorInfo:any,
}
export interface ITrayIconClickEvent extends ITrayIconHoverEvent{
    button:number,
}
export type SetTrayIconClickListener = (event:ITrayIconClickEvent)=>void;
export interface ISetTrayIconDefaultListenerObj {
    clickListener:SetTrayIconClickListener,
    hoverListener:(event:ITrayIconHoverEvent)=>void,
}
export type SetTrayIconListener = ISetTrayIconDefaultListenerObj | SetTrayIconClickListener;

export interface FinApplication{
    addEventListener:(type:string, listener:(event?:any)=>void,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    close:(force:boolean, callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getChildWindows:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getGroups:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getInfo:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getManifest:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getParentUuid:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getShortcuts:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getTrayIconInfo:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    getZoomLevel:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    isRunning:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    registerUser:(userName:string, appName:string, callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    removeEventListener:(type:string, listener:(event?:any)=>void,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    removeTrayIcon:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    restart:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    run:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    scheduleRestart:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    sendApplicationLog:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    setAppLogUsername:(username:string,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    setShortcuts:(config:ISetShortCutsConfig,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    setTrayIcon:(iconUrl:string, listener:SetTrayIconListener, callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    setZoomLevel:(level:number, callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    terminate:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
}

// end of window apis