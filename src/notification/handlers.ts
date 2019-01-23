import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#Notification
export const createNotificationHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.createNotification(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#.getCurrent
export const getCurrentHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getCurrent(action).catch((e)=>{
        // eat the exception
    });
};


//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#close
export const closeHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.close(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#sendMessage
export const sendMessageHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.sendMessage(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#sendMessageToApplication
export const sendMessageToApplicationHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.sendMessageToApplication(action).catch((e)=>{
        // eat the exception
    });
};