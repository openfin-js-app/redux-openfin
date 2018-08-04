import {Store, Action, Middleware, MiddlewareAPI } from 'redux';
import { ActionHandlerParams } from './GlobalTypes';

import * as ApplicationActions from './application/actions/actionTypes';
import * as  ApplicationHandlers from './application/handlers';
import * as NotificationActions from './notification/actions/actionTypes';
import * as  NotificationHandlers from './notification/handlers';
import * as SystemActions from './system/actions/actionTypes';
import * as  SystemHandlers from './system/handlers';
import * as WindowActions from './window/actions/actionTypes';
import * as  WindowHandlers from './window/handlers';

import {getStateRes} from "./window/actions/handlerActionCreator";
import {GetStateResPayload} from "./window/types";

const actionHandlers:any = {
    [ApplicationActions.NEW_APPLICATION]:ApplicationHandlers.newApplicatoinHandler,
    [ApplicationActions.RESTART]:ApplicationHandlers.restartHandler,
    [ApplicationActions.CLOSE]:ApplicationHandlers.closeHandler,
    [NotificationActions.CREATE_NOTIFICATION_RES]:NotificationHandlers.createNotificationHandler,
    [SystemActions.GET_DEVICE_ID]:SystemHandlers.getDeviceIdHandler,
    [SystemActions.GET_DEVICE_USER_ID]:SystemHandlers.getDeviceUserIdHandler,
    [SystemActions.GET_MONITOR_INFO]:SystemHandlers.getMonitorInfoHandler,
    [SystemActions.GET_VERSION]:SystemHandlers.getVersionHandler,
    [SystemActions.GET_HOST_SPECS]:SystemHandlers.getHostSpecsHandler,
    [SystemActions.GET_ENVIRONMENT_VARIABLE]:SystemHandlers.getEnvironmentVariableHandler,
    [SystemActions.CLEAR_CACHE]:SystemHandlers.clearCacheHandler,
    [WindowActions.NEW_WINDOWS]:WindowHandlers.newWindowHandler,
    [WindowActions.CLOSE]:WindowHandlers.closeHandler,
    [WindowActions.FOCUS]:WindowHandlers.focusHandler,
    [WindowActions.GET_BOUNDS]:WindowHandlers.getBoundsHandler,
    [WindowActions.GET_STATE]:WindowHandlers.getStateHandler,
    [WindowActions.GET_OPTIONS]:WindowHandlers.getOptionsHandler,
    [WindowActions.HIDE]:WindowHandlers.hideHandler,
    [WindowActions.MINIMIZE]:WindowHandlers.minimizeHandler,
    [WindowActions.MAXIMIZE]:WindowHandlers.maximizeHandler,
    [WindowActions.MOVE_BY]:WindowHandlers.moveByHandler,
    [WindowActions.MOVE_TO]:WindowHandlers.moveToHandler,
    [WindowActions.RESTORE]:WindowHandlers.restoreHandler,
    [WindowActions.SHOW]:WindowHandlers.showHandler,
    [WindowActions.SET_AS_FOREGROUND]:WindowHandlers.setAsForegroundHandler,
    [WindowActions.SET_BOUNDS]:WindowHandlers.setBoundsHandler,
    [WindowActions.UPDATE_OPTIONS]:WindowHandlers.updateOptionsHandler,
};

function _do_reigister_listener(fin:any, store:Store<any>){
    const finWindow = fin.desktop.Window.getCurrent();
    const { dispatch } = store;

    function _dispatch_getStateRes(event:any) {
        if(event && event.type){
            if (event.type == 'maximized'){
                dispatch(getStateRes({state:'maximized'}) as any);
            }else if (event.type == 'minimized'){
                dispatch(getStateRes({state:'minimized'}) as any);
            }else if (event.type == 'restored'){
                dispatch(getStateRes({state:'restored'}) as any);
            }
        }
    }

    finWindow.addEventListener("maximized",_dispatch_getStateRes);
    finWindow.addEventListener("minimized",_dispatch_getStateRes);
    finWindow.addEventListener("restored",_dispatch_getStateRes);
}

export function middlewareCreator(fin: any):Middleware {
    return (
        (store:Store<any>) => {
            _do_reigister_listener(fin,store);
            return (next:Function) => (action:Action) => {
                const actionHanlderParams : ActionHandlerParams = {
                    fin, store, next, action,
                };
                const handler = actionHandlers[action.type];
                if (handler){
                    handler(actionHanlderParams);
                }else{
                    return next(action);
                }
            }
        }
    )as Middleware
}