import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export const CREATE_NOTIFICATION_ERROR_MSG = 'OpenFin API call Notification.constructor failed.';
export const NOTIFICATION_GET_CURRENT_ERROR_MSG = 'OpenFin API call Notification.getCurrent failed.';
export const NOTIFICATION_CLOSE_ERROR_MSG = 'OpenFin API call Notification.close failed.';
export const NOTIFICATION_SEND_MSG_ERROR_MSG = 'OpenFin API call Notification.sendMessage failed.';
export const NOTIFICATION_SEND_MSG_TO_APP_ERROR_MSG = 'OpenFin API call Notification.sendMessageToApplication failed.';

export interface BaseNotificatoinEventResPayload {
    userId:any
}

export interface FinNotification {
    close:(callback?:Function)=>void,
    sendMessage:(message:string, callback?:Function)=>void,
    sendMessageToApplication:(message:string, callback?:Function)=>void,
}

export interface CreateNotificationPayload extends BaseRequestPayload{
    userId?:any,
    ignoreMouseOver:boolean;
    url:string;
    message:any;
    timeout:string|number;
    opacity:number;
    onClick?:()=>void,
    onClose?:()=>void,
    onDismiss?:()=>void,
    onError?:(reason:string,errorObj)=>void,
    onMessage?:(message)=>void,
    onShow?:(successObj)=>void,
}

export interface CreateNotificationResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{
    notification:FinNotification
}


export interface NotificationGetCurrentPayload extends BaseRequestPayload {
}
export interface NotificationGetCurrentResPayload extends BaseRequestPayload {
    notification:FinNotification
}


export interface NotificationClosePayload extends BaseRequestPayload {
}
export interface NotificationCloseResPayload extends BaseRequestPayload {

}


export interface NotificationSendMsgPayload extends BaseRequestPayload {
    message:any,
}
export interface NotificationSendMsgResPayload extends BaseRequestPayload {

}

export interface NotificationSendMsgToAppPayload extends BaseRequestPayload {
    message:any,
}
export interface NotificationSendMsgToAppResPayload extends BaseRequestPayload {

}


// notification events

export interface NotificationOnClickResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{

}
export interface NotificationOnCloseResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{

}
export interface NotificationOnDismissResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{

}
export interface NotificationOnErrorResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{
    reason:string,
    errorObj:any,

}
export interface NotificationOnMsgResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{
    message:any,
}
export interface NotificationOnShowResPayload extends BaseResponsePayload, BaseNotificatoinEventResPayload{
    successObj:any,
}

