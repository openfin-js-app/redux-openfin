import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export const CREATE_NOTIFICATION_ERROR_MSG = 'OpenFin API call Notification.constructor failed.';

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
    notification:any
}