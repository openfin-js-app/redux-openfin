import {Store} from 'redux';
import {Action} from 'redux-actions';

export const FIN_NOT_INJECTED_MSG = 'fin handler is not injected or initialized';

// the action field name of the field name of the lib dispatch upon window object
export const LIB_REDUX_DISPATCH_FIELD_NAME='REDUX_OPENFIN_LIB_REDUX_DISPATCH_FIELD_NAME';

export type ActionHandlerParams ={
    fin:any,
    store:Store<any>,
    next:Function,
    action:Action<any>,
}

export interface IFinIdentity {
    uuid:string,
    name:string,
    batch?:boolean,
    entityType?:string,
    parentFrame?:string,
}

// start of window apis

export type FinWindowState = 'minimized'|'maximized'|'restored';

// export type FinWindowEvent = any;
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


export type ErrorCallback = (error:Object) => void;

type FinCallback= (...args:any[])=>void;
type FinErrCallback = (reason:string|Error)=>void;

export interface LegacyFinWindow{
    name:string;
    constructor:(
        options:{name:string},
        callback?:()=>void,
        errorCallback?:ErrorCallback,
    )=>LegacyFinWindow,
    addEventListener:(type:string,listener:(event?:any)=>void,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
    authenticate:(userName:string,password:string,callback?:FinCallback,errorCallback?:FinErrCallback)=>void,
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
    joinGroup:(target:LegacyFinWindow,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    leaveGroup:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    maximize:(callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
    mergeGroups:(target:LegacyFinWindow,callback?:FinCallback,errorCallback?:FinErrCallback)=>void;
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



export interface FinWindow{
    nativeWindow?:any;
    name:string;
    addListener:(type:string,listener:(event?:any)=>void,options?:any)=>Promise<FinWindow>,
    authenticate:(userName:string,password:string,)=>Promise<void>,
    bringToFront:()=>Promise<void>;
    close:(force?:boolean,)=>Promise<void>;
    disableUserMovement:()=>Promise<void>;
    enableUserMovement:()=>Promise<void>;
    focus:()=>Promise<void>;
    getGroup:()=>Promise<FinWindow[]>;
    getBounds:()=>Promise<FinWindowBounds>;
    getState:()=>Promise<FinWindowState>;
    getOptions:()=>Promise<any>;
    hide:()=>Promise<void>;
    isShowing:()=>Promise<boolean>;
    joinGroup:(target:FinWindow)=>Promise<void>;
    leaveGroup:()=>Promise<void>;
    maximize:()=>Promise<void>;
    mergeGroups:(target:FinWindow,)=>Promise<void>;
    minimize:()=>Promise<void>;
    moveBy:(deltaLeft:number, deltaTop:number,)=>Promise<void>;
    moveTo:(left:number, top:number,)=>Promise<void>;
    removeListener:(type:string,listener:(event?:any)=>void,options?:any)=>Promise<void>,
    restore:()=>Promise<void>;
    show:(force?:boolean)=>Promise<void>;
    setAsForeground:()=>Promise<void>;
    setBounds:(bounds:{left:number, top:number, width:number, height:number}|Partial<FinWindowBounds>)=>Promise<void>;
    updateOptions:(options:Partial<WindowOptions>,)=>Promise<void>;
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


// export interface ITrayIconClickEvent extends ITrayIconHoverEvent{
//     button:number,
// }
// export type SetTrayIconClickListener = (event:ITrayIconClickEvent)=>void;
// export interface ISetTrayIconDefaultListenerObj {
//     clickListener:SetTrayIconClickListener,
//     hoverListener:(event:ITrayIconHoverEvent)=>void,
// }
// export type SetTrayIconListener = ISetTrayIconDefaultListenerObj | SetTrayIconClickListener;

export interface FinApplication{
    getWindow:()=>Promise<FinWindow>,
    addListener:(type:string, listener:(event?:any)=>void,options?:any)=>Promise<FinApplication>,
    close:(force:boolean)=>Promise<boolean>,
    getChildWindows:()=>Promise<FinWindow[]>,
    getGroups:()=>Promise<FinWindow[][]>,
    getInfo:()=>Promise<{isRunning:boolean, uuid:string, parentUuid:string}>,
    getManifest:()=>Promise<any>,
    getParentUuid:()=>Promise<string>,
    getShortcuts:()=>Promise<{desktop:boolean,startMenu:boolean,systemStartup:boolean,}>,
    getTrayIconInfo:()=>Promise<{bounds:any,monitorInfo:any,x:number,y:number}>,
    getZoomLevel:()=>Promise<number>,
    isRunning:()=>Promise<boolean>,
    registerUser:(userName:string, appName:string, )=>Promise<void>,
    removeListener:(type:string, listener:(event?:any)=>void,options?:any)=>Promise<FinApplication>,
    removeTrayIcon:()=>Promise<void>,
    restart:()=>Promise<void>,
    start:()=>Promise<FinApplication>,
    scheduleRestart:()=>Promise<any>,
    sendApplicationLog:()=>Promise<any>,
    setAppLogUsername:(username:string,)=>Promise<void>,
    setShortcuts:(config:ISetShortCutsConfig,)=>Promise<void>,
    setTrayIcon:(iconUrl:string )=>Promise<void>,
    setZoomLevel:(level:number, )=>Promise<void>,
    terminate:()=>Promise<void>,
}

// end of window apis