import { BaseRequestPayload, BaseResponsePayload } from '../base/BasePayload';

export interface GetMachineIdPayload extends BaseRequestPayload {

}
export interface GetMachineIdResPayload extends BaseResponsePayload{
    id?:string;
}

export interface GetDeviceUserIdPayload extends BaseRequestPayload {

}
export interface GetDeviceUserIdResPayload extends BaseResponsePayload{
    id?:string;
}

export interface GetMonitorInfoPayload extends BaseRequestPayload {

}
export interface GetMonitorInfoRect {
    bottom:number;
    left:number;
    right:number;
    top:number;
}
export interface GetMonitorInfoMonitor {
    deviceId:string;
    name:string;
    displayDeviceActive:Boolean;
    monitorRect:GetMonitorInfoRect;
    availableRect:GetMonitorInfoRect;
}
export interface GetMonitorInfoResPayload extends BaseResponsePayload{
    primaryMonitor?:GetMonitorInfoMonitor;
    nonPrimaryMonitors?:GetMonitorInfoMonitor;
}

export interface GetVersionPayload extends BaseRequestPayload {

}
export interface GetVersionResPayload extends BaseResponsePayload{
    version?:string;
}

export interface GetHostSpecsPayload extends BaseRequestPayload {

}
export interface GetHostSpecsResPayload extends BaseResponsePayload{
    env?:string;
    value?:string;
}

export interface GetEnvironmentVariablePayload extends BaseRequestPayload {
    env:string;
}
export interface GetEnvironementVariableResPaylod extends BaseResponsePayload {
    env?:string;
    value?:string;
}

export interface ClearCachePayload extends BaseRequestPayload {
    cache?:boolean;
    cookies?:boolean;
    localStorage?:boolean;
    appCache?:boolean;
    userData?:boolean;
}
export interface ClearCacheResPayload extends BaseResponsePayload{

}