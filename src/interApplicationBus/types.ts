import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

import {IFinIdentity} from '../GlobalTypes';

export interface PublishPayload extends BaseRequestPayload{
    topic:string,
    message:any,
}
export interface PublishResPayload extends BaseRequestPayload{
}

export interface SubscribePayload extends BaseRequestPayload{
    source:IFinIdentity,
    topic:string,
    listener:(message,uuid,name)=>void,
}
export interface SubscribeResPayload extends BaseRequestPayload{
}