import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export enum GroupEventReason{
    DISBAND     = 'disband',
    JOIN        = 'join',
    LEAVE       = 'leave',
    MERGE       = 'merge',
}

export enum GroupEventMemberOf {
    NOTHING     = 'nothing',
    SOURCE      = 'source',
    TARGET      = 'target',
}

export enum SnapDirection{
    RIGHT       = 1,
    LEFT        = 2,
    BOTTOM      = 3,
    TOP         = 4,
}

export interface IRectangle{
    x:number,
    y:number,
    width:number,
    height:number,
}

export interface IDockingOptions {
    // 'range' is the distance between windows at which snapping applies
    range:number,
    // 'spacing' is the distance between windows when they become docked
    spacing:number,
    // 'undockOffsetX/Y' are offset values - they make the undocked window 'jump' a number of pixels
    undockOffsetX:number,
    undockOffsetY:number,
    // opacities applied for 1) moving window, 2) snappedMovingWindow, 3) snappedTargetWindow
    // Value from 0 (invisible) to 1.0 (fully opaque)
    movingOpacity:number,
    snappedMovingOpacity:number,
    snappedTargetOpacity:number,
    // 'dockableToOthers' is a boolean which applies only to DockingWindow
    dockableToOthers:boolean,
    // 'unregisterOnClose' is a boolean which toggles automatic unregistration on close of a DockingWindow
    unregisterOnClose:boolean,
}


// todo: implement this
export interface UndockAllWindowsPayload extends BaseRequestPayload{

}

// todo: implement this
export interface UndockAllWindowsResPayload extends BaseResponsePayload{

}

export interface DockWindowResPayload extends BaseResponsePayload{
    windowName:string,
}

export interface UnDockWindowResPayload extends BaseResponsePayload{
    windowName:string,
}