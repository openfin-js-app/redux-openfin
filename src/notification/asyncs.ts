import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import {initState} from '../init';

import wrapAsyncFun from '../utils/wrapAsyncFun'

import uuid from '../utils/uuid';

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

    return wrapAsyncFun<types.CreateNotificationPayload,types.CreateNotificationResPayload>(
        action,
        handlerActions.createNotificationRes,
        async (fin)=>{
            let notification = await fin.Notification.create(finOptions);
            await notification.show();
            return handlerActions.createNotificationRes({
                userId,
                notification
            });
        }
    );
}

export async function getCurrent(action:Action<types.NotificationGetCurrentPayload>):Promise<Action<types.NotificationGetCurrentResPayload>>{
    return wrapAsyncFun<types.NotificationGetCurrentPayload,types.NotificationGetCurrentResPayload>(
        action,
        handlerActions.getCurrentRes,
        async (fin)=>{
            const notification = await fin.Notification.getCurrent();
            return handlerActions.getCurrentRes({notification});
        }
    )
}

export async function close(action:Action<types.NotificationClosePayload>):Promise<Action<types.NotificationCloseResPayload>>{
    return wrapAsyncFun<types.NotificationClosePayload,types.NotificationCloseResPayload>(
        action,
        handlerActions.closeRes,
        async (fin)=>{
            const notification = await fin.Notification.getCurrent();
            await notification.close();;
            return handlerActions.closeRes({});
        }
    )
}

export async function sendMessage(action:Action<types.NotificationSendMsgPayload>):Promise<Action<types.NotificationSendMsgResPayload>>{

    const { payload: {
        message
    }} = action;

    return wrapAsyncFun<types.NotificationSendMsgPayload,types.NotificationSendMsgResPayload>(
        action,
        handlerActions.sendMessageRes,
        async (fin)=>{
            const notification = await fin.Notification.getCurrent();
            await notification.sendMessage(message);
            return handlerActions.sendMessageRes({});
        }
    )
}

export async function sendMessageToApplication(action:Action<types.NotificationSendMsgToAppPayload>):Promise<Action<types.NotificationSendMsgToAppResPayload>>{

    const { payload: {
        message
    }} = action;

    return wrapAsyncFun<types.NotificationSendMsgToAppPayload,types.NotificationSendMsgToAppResPayload>(
        action,
        handlerActions.sendMessageToApplicationRes,
        async (fin)=>{
            const notification = await fin.Notification.getCurrent();
            await notification.sendMessageToApplication(message);
            return handlerActions.sendMessageToApplicationRes({});
        }
    )
}