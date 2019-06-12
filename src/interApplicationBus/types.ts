import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export const PUBLISH_ERROR_MSG = 'OpenFin API call InterApplicationBus.publish failed.';
export const SUBSCRIBE_ERROR_MSG = 'OpenFin API call InterApplicationBus.subscribe failed.';

export interface IIdentity {
    uuid:string,
    name:string,
}

export interface PublishPayload extends BaseRequestPayload{
    topic:string,
    message:any,
}
export interface PublishResPayload extends BaseRequestPayload{
}

export interface SubscribePayload extends BaseRequestPayload{
    source:IIdentity,
    topic:string,
    listener:(message,uuid,name)=>void,
}
export interface SubscribeResPayload extends BaseRequestPayload{
}