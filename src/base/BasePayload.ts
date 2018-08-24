export interface BaseRequestPayload {
    callback?:(...parameters:any[])=>any,
    errorCallback?:(...parameters:any[])=>any,
}

export interface BaseResponsePayload {
    name?:string,
    error?:Error
}