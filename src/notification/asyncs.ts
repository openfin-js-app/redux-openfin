import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    CREATE_NOTIFICATION_ERROR_MSG
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#Notification
export async function createNotification(action:Action<types.CreateNotificationPayload>):Promise<Action<types.CreateNotificationResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.CreateNotificationPayload,types.CreateNotificationResPayload>(
        action,
        CREATE_NOTIFICATION_ERROR_MSG,
        handlerActions.createNotificationRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let notification = new fin.desktop.Notification(options,
                ()=>{
                    const responseAction = resActionCreator({notification});
                    succCb(responseAction);
                },errCb);
        }
    );
}