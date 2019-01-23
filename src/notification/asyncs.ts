import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import {initState} from '../init';

import createAsyncFun from '../utils/createAsyncFun'

import uuid from '../utils/uuid';

import {
    CREATE_NOTIFICATION_ERROR_MSG,
    NOTIFICATION_GET_CURRENT_ERROR_MSG,
    NOTIFICATION_CLOSE_ERROR_MSG,
    NOTIFICATION_SEND_MSG_ERROR_MSG,
    NOTIFICATION_SEND_MSG_TO_APP_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#Notification
export async function createNotification(action:Action<types.CreateNotificationPayload>):Promise<Action<types.CreateNotificationResPayload>>{
    const  options  = action.payload;

    let userId = action.payload.userId;
    if (!userId){
        userId = uuid();
    }

    let finOptions:any = {...options};
    delete finOptions.userId;
    if (initState.store){
        const dispatch = initState.store.dispatch;
        finOptions.onClick = ()=>{
            dispatch(handlerActions.notificationOnClickRes({userId}));
        };
        finOptions.onClose = ()=>{
            dispatch(handlerActions.notificationOnCloseRes({userId}));
        };
        finOptions.onDismiss = ()=>{
            dispatch(handlerActions.notificationOnDismissRes({userId}));
        };
        finOptions.onError = (reason,errorObj)=>{
            dispatch(handlerActions.notificationOnErrorRes({userId,reason,errorObj}));
        };
        finOptions.onMessage = (message)=>{
            dispatch(handlerActions.notificationOnMsgRes({userId,message}));
        };
        finOptions.onShow = (successObj)=>{
            dispatch(handlerActions.notificationOnShowRes({userId,successObj}));
        };
    }

    return createAsyncFun<types.CreateNotificationPayload,types.CreateNotificationResPayload>(
        action,
        CREATE_NOTIFICATION_ERROR_MSG,
        handlerActions.createNotificationRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let notification = new fin.desktop.Notification(finOptions,
                ()=>{
                    const responseAction = resActionCreator({
                        userId,
                        notification
                    });
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#.getCurrent
export async function getCurrent(action:Action<types.NotificationGetCurrentPayload>):Promise<Action<types.NotificationGetCurrentResPayload>>{
    return createAsyncFun<types.NotificationGetCurrentPayload,types.NotificationGetCurrentResPayload>(
        action,
        NOTIFICATION_GET_CURRENT_ERROR_MSG,
        handlerActions.getCurrentRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const notification = fin.desktop.Notification.getCurrent();
            const responseAction = resActionCreator({notification})
            succCb(responseAction);
        }
    )
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#close
export async function close(action:Action<types.NotificationClosePayload>):Promise<Action<types.NotificationCloseResPayload>>{
    return createAsyncFun<types.NotificationClosePayload,types.NotificationCloseResPayload>(
        action,
        NOTIFICATION_CLOSE_ERROR_MSG,
        handlerActions.closeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const notification = fin.desktop.Notification.getCurrent();
            const responseAction = resActionCreator({})
            notification.close(()=>{
                succCb(responseAction);
            });
        }
    )
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#sendMessage
export async function sendMessage(action:Action<types.NotificationSendMsgPayload>):Promise<Action<types.NotificationSendMsgResPayload>>{

    const { payload: {
        message
    }} = action;

    return createAsyncFun<types.NotificationSendMsgPayload,types.NotificationSendMsgResPayload>(
        action,
        NOTIFICATION_SEND_MSG_ERROR_MSG,
        handlerActions.sendMessageRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const notification = fin.desktop.Notification.getCurrent();
            const responseAction = resActionCreator({})
            notification.sendMessage(message,()=>{
                succCb(responseAction);
            });
        }
    )
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#sendMessageToApplication
export async function sendMessageToApplication(action:Action<types.NotificationSendMsgToAppPayload>):Promise<Action<types.NotificationSendMsgToAppResPayload>>{

    const { payload: {
        message
    }} = action;

    return createAsyncFun<types.NotificationSendMsgToAppPayload,types.NotificationSendMsgToAppResPayload>(
        action,
        NOTIFICATION_SEND_MSG_TO_APP_ERROR_MSG,
        handlerActions.sendMessageToApplicationRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const notification = fin.desktop.Notification.getCurrent();
            const responseAction = resActionCreator({})
            notification.sendMessageToApplication(message,()=>{
                succCb(responseAction);
            });
        }
    )
}