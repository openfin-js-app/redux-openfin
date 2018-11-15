import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#Notification
export const createNotificationHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.createNotification(action).catch((e)=>{
        // eat the exception
    });
};