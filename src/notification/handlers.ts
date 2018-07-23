import {ActionHandlerParams} from "../GlobalTypes";
import * as handlerActions from './actions/handlerActionCreator';
import * as types from './types';

const CREATE_NOTIFICATION_ERROR_MSG = 'OpenFin API call Notification.constructor failed.';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Notification.html#Notification
export const createNotificationHandler = (params:ActionHandlerParams)=>{
    const { action, fin, store:{ dispatch } }=params;
    const { options, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.createNotificationRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : CREATE_NOTIFICATION_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.createNotificationRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    new fin.desktop.Notification(options,wrappedCallback,wrappedErrorCallback);

};