import {Store} from 'redux';
import {Action} from 'redux-actions';

export type Noop = ()=> void;
export type ErrorCallback = (error:Object) => void;

export type FinWindowEvent = Object;
export type FinWindowBounds = {
    height:number,
    left:number,
    top:number,
    width:number,
    right:number,
    bottom:number,
};

export declare class FinWindow{
    name:string;
    constructor(
        options:{name:string},
        callback?:()=>void,
        errorCallback?:ErrorCallback,
    )
}

export type ActionHandlerParams ={
    fin:any,
    store:Store<any>,
    next:Function,
    action:Action<any>,
}

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