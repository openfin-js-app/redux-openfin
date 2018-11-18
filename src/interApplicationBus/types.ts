import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export const PUBLISH_ERROR_MSG = 'OpenFin API call InterApplicationBus.publish failed.';
export const SUBSCRIBE_ERROR_MSG = 'OpenFin API call InterApplicationBus.subscribe failed.';

export interface PublishPayload extends BaseRequestPayload{
    topic:string,
    message:any,
}
export interface PublishResPayload extends BaseRequestPayload{
}

export interface SubscribePayload extends BaseRequestPayload{
    senderUuid:string,
    name?:string,
    topic:string,
    listener:(message,uuid,name)=>void,
}
export interface SubscribeResPayload extends BaseRequestPayload{
}