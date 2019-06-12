import { WindowOptions, FinWindow } from '../GlobalTypes';
import { BaseRequestPayload, BaseResponsePayload } from '../base/BasePayload';

export interface GetCurrentPayload extends BaseRequestPayload{
}
export interface GetCurrentResPayload extends BaseResponsePayload{
    current:any,
}

export interface WrapPayload extends BaseRequestPayload{
    appUuid:string,
    windowName:string,
}
export interface WrapResPayload extends BaseResponsePayload{
    window:any,
}

export interface AddEventListenerPayload extends BaseRequestPayload, Partial<WindowOptions>{
    type:string,
    listener: (event?:any)=>void,
    options?:any,
}
export interface AddEventListenerResPayload extends BaseResponsePayload{
}

export interface AuthenticatePayload extends BaseRequestPayload{
    userName:string,
    password:string,
}
export interface AuthenticateResPayload extends BaseResponsePayload{
}

export interface BringToFrontPayload extends BaseRequestPayload, Partial<WindowOptions>{
}
export interface BringToFrontResPayload extends BaseResponsePayload{
}

export interface CreateWindowPayload extends BaseRequestPayload, Partial<WindowOptions>{

}
export interface CreateWindowResPayload extends BaseResponsePayload{
    window?:any;
}

export interface ClosePayload extends BaseRequestPayload {
    force:boolean;
}
export interface CloseResPayload extends BaseResponsePayload{

}

export interface DisableUserMovementPayload extends BaseRequestPayload {
}
export interface DisableUserMovementResPayload extends BaseResponsePayload{
}

export interface EnableUserMovementPayload extends BaseRequestPayload {
}
export interface EnableUserMovementResPayload extends BaseResponsePayload{
}

export interface FocusPayload extends BaseRequestPayload{

}
export interface FocusResPayload extends BaseResponsePayload {

}

export interface GetBoundsPayload extends BaseRequestPayload {

}
export interface GetBoundsResPayload extends BaseResponsePayload {
    top?:number,
    left?:number,
    height?:number,
    width?:number,
    right?:number,
    bottom?:number,
}

export interface GetGroupPayload extends BaseRequestPayload{
}
export interface GetGroupResPayload extends BaseResponsePayload {
    windows?:any[]
}

export interface GetStatePayload extends BaseRequestPayload{

}
export interface GetStateResPayload extends BaseResponsePayload {
    state?:string
}

export interface GetOptionsPayload extends BaseRequestPayload{

}
export interface GetOptionsResPayload extends BaseResponsePayload{
    options?:WindowOptions
}

export interface HidePayload extends BaseRequestPayload{

}
export interface HideResPayload extends BaseResponsePayload{

}

export interface JoinGroupPayload extends BaseRequestPayload{
    currentWindow:FinWindow,
    targetWindow:FinWindow,
}
export interface JoinGroupResPayload extends BaseResponsePayload{

}

export interface LeaveGroupPayload extends BaseRequestPayload{
    targetWindow?:FinWindow,
}
export interface LeaveGroupResPayload extends BaseResponsePayload{
}

export interface MinimizePayload extends BaseRequestPayload{

}
export interface MinimizeResPayload extends BaseResponsePayload{

}

export interface MaximizePayload extends BaseRequestPayload{

}
export interface MaximizeResPayload extends BaseResponsePayload{

}

export interface MergeGroupsPayload extends BaseRequestPayload{
    currentWindow:FinWindow,
    targetWindow:FinWindow,
}
export interface MergeGroupsResPayload extends BaseResponsePayload{

}

export interface MoveByPayload extends BaseRequestPayload{
    deltaLeft:number;
    deltaTop:number;
}
export interface MoveByResPayload extends BaseResponsePayload{

}

export interface MoveToPayload extends BaseRequestPayload{
    left:number;
    top:number;
}
export interface MoveToResPayload extends BaseResponsePayload{

}

export interface RestorePayload extends BaseRequestPayload{

}
export interface RestoreResPayload extends BaseResponsePayload{

}

export interface ShowPayload extends BaseRequestPayload{
    force:boolean;
}
export interface ShowResPayload extends BaseResponsePayload{

}

export interface SetAsForegroundPayload extends BaseRequestPayload{

}
export interface SetAsForegroundResPayload extends BaseResponsePayload{

}

export interface SetBoundsPayload extends BaseRequestPayload{
    top:number;
    left:number;
    height:number;
    width:number;
}
export interface SetBoundsResPayload extends BaseResponsePayload{

}

export interface UpdateOptionsPayload extends BaseRequestPayload{
    options:Partial<WindowOptions>
}
export interface UpdateOptionsResPayload extends BaseResponsePayload{

}