import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export interface CreateNotificationPayload extends BaseRequestPayload{
    ignoreMouseOver:boolean;
    url:string;
    message:string;
    onClick:Function;
    onClose:Function;
    onDismiss:Function;
    onError:Function;
    onMessage:Function;
    onShow:Function;
    timeout:string|number;
    opacity:number;
}

export interface CreateNotificationResPayload extends BaseResponsePayload{

}