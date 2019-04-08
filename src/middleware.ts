import {Store, Middleware, MiddlewareAPI } from 'redux';
import { Action } from 'redux-actions';
import { ActionHandlerParams, LIB_REDUX_DISPATCH_FIELD_NAME } from './GlobalTypes';

import * as ApplicationActions from './application/actions/actionTypes';
import * as  ApplicationHandlers from './application/handlers';
import * as InterApplicationActions from './interApplicationBus/actions/actionTypes';
import * as  InterApplicationHandlers from './interApplicationBus/handlers';
import * as NotificationActions from './notification/actions/actionTypes';
import * as  NotificationHandlers from './notification/handlers';
import * as SystemActions from './system/actions/actionTypes';
import * as  SystemHandlers from './system/handlers';
import * as WindowActions from './window/actions/actionTypes';
import * as  WindowHandlers from './window/handlers';

import init, {
    IConfig
} from './init';

import {
    default as initChannel,
    sharedActionHandler,
    sharedActionDict,
} from './channel';

const actionHandlers:any = {
    [ApplicationActions.NEW_APPLICATION]:ApplicationHandlers.newApplicatoinHandler,
    [ApplicationActions.APPLICATION_GET_CURRENT]:ApplicationHandlers.getCurrentHandler,
    [ApplicationActions.APPLICATION_GET_WINDOW]:ApplicationHandlers.getWindowHandler,
    [ApplicationActions.APPLICATION_WRAP]:ApplicationHandlers.wrapHandler,
    [ApplicationActions.APPLICATION_ADD_EVENT_LISTENER]:ApplicationHandlers.addEventListenerHandler,
    [ApplicationActions.CLOSE]:ApplicationHandlers.closeHandler,
    [ApplicationActions.APPLICATION_GET_CHILD_WINDOWS]:ApplicationHandlers.getChildWindowsHandler,
    [ApplicationActions.APPLICATION_GET_INFO]:ApplicationHandlers.getInfoHandler,
    [ApplicationActions.APPLICATION_GET_SHORTCUTS]:ApplicationHandlers.getShortcutsHandler,
    [ApplicationActions.APPLICATION_GET_TRAY_ICON_INFO]:ApplicationHandlers.getTrayIconInfoHandler,
    [ApplicationActions.APPLICATION_GET_ZOOM_LEVEL]:ApplicationHandlers.getZoomLevelHandler,
    [ApplicationActions.APPLICATION_IS_RUNNING]:ApplicationHandlers.isRunningHandler,
    [ApplicationActions.APPLICATION_REMOVE_EVENT_LISTENER]:ApplicationHandlers.removeEventListenerHandler,
    [ApplicationActions.RESTART]:ApplicationHandlers.restartHandler,
    [ApplicationActions.APPLICATION_SCHEDULE_RESTART]:ApplicationHandlers.scheduleRestartHandler,
    [ApplicationActions.APPLICATION_SET_SHORTCUTS]:ApplicationHandlers.setShortcutsHandler,
    [ApplicationActions.APPLICATION_SET_TRAY_ICON]:ApplicationHandlers.setTrayIconHandler,
    [ApplicationActions.APPLICATION_SET_ZOOM_LEVEL]:ApplicationHandlers.setZoomLevelHandler,
    [ApplicationActions.APPLICATION_TERMINATE]:ApplicationHandlers.terminateHandler,
    [InterApplicationActions.PUBLISH]:InterApplicationHandlers.publishHandler,
    [InterApplicationActions.SUBSCRIBE]:InterApplicationHandlers.subscribeHandler,
    [NotificationActions.CREATE_NOTIFICATION]:NotificationHandlers.createNotificationHandler,
    [NotificationActions.NOTIFICATION_GET_CURRENT]:NotificationHandlers.getCurrentHandler,
    [NotificationActions.NOTIFICATION_CLOSE]:NotificationHandlers.closeHandler,
    [NotificationActions.NOTIFICATION_SEND_MSG]:NotificationHandlers.sendMessageHandler,
    [NotificationActions.NOTIFICATION_SEND_MSG_TO_APP]:NotificationHandlers.sendMessageToApplicationHandler,
    [SystemActions.GET_MACHINE_ID]:SystemHandlers.getMachineIdHandler,
    [SystemActions.GET_DEVICE_USER_ID]:SystemHandlers.getDeviceUserIdHandler,
    [SystemActions.GET_MONITOR_INFO]:SystemHandlers.getMonitorInfoHandler,
    [SystemActions.GET_VERSION]:SystemHandlers.getVersionHandler,
    [SystemActions.GET_HOST_SPECS]:SystemHandlers.getHostSpecsHandler,
    [SystemActions.GET_ENVIRONMENT_VARIABLE]:SystemHandlers.getEnvironmentVariableHandler,
    [SystemActions.CLEAR_CACHE]:SystemHandlers.clearCacheHandler,
    [WindowActions.GET_CURRENT]:WindowHandlers.getCurrentHandler,
    [WindowActions.WRAP]:WindowHandlers.wrapHandler,
    [WindowActions.ADD_EVENT_LISTENER]:WindowHandlers.addEventListenerHandler,
    [WindowActions.AUTHENTICATE]:WindowHandlers.authenticateHandler,
    [WindowActions.BRING_TO_FRONT]:WindowHandlers.bringToFrontHandler,
    [WindowActions.NEW_WINDOWS]:WindowHandlers.newWindowHandler,
    [WindowActions.CLOSE]:WindowHandlers.closeHandler,
    [WindowActions.DISABLE_FRAME]:WindowHandlers.disableFrameHandler,
    [WindowActions.ENABLE_FRAME]:WindowHandlers.enableFrameHandler,
    [WindowActions.FOCUS]:WindowHandlers.focusHandler,
    [WindowActions.GET_GROUP]:WindowHandlers.getGroupHandler,
    [WindowActions.GET_BOUNDS]:WindowHandlers.getBoundsHandler,
    [WindowActions.GET_STATE]:WindowHandlers.getStateHandler,
    [WindowActions.GET_OPTIONS]:WindowHandlers.getOptionsHandler,
    [WindowActions.HIDE]:WindowHandlers.hideHandler,
    [WindowActions.JOIN_GROUP]:WindowHandlers.joinGroupHandler,
    [WindowActions.LEAVE_GROUP]:WindowHandlers.leaveGroupHandler,
    [WindowActions.MINIMIZE]:WindowHandlers.minimizeHandler,
    [WindowActions.MAXIMIZE]:WindowHandlers.maximizeHandler,
    [WindowActions.MERGE_GROUPS]:WindowHandlers.mergeGroupsHandler,
    [WindowActions.MOVE_BY]:WindowHandlers.moveByHandler,
    [WindowActions.MOVE_TO]:WindowHandlers.moveToHandler,
    [WindowActions.RESTORE]:WindowHandlers.restoreHandler,
    [WindowActions.SHOW]:WindowHandlers.showHandler,
    [WindowActions.SET_AS_FOREGROUND]:WindowHandlers.setAsForegroundHandler,
    [WindowActions.SET_BOUNDS]:WindowHandlers.setBoundsHandler,
    [WindowActions.UPDATE_OPTIONS]:WindowHandlers.updateOptionsHandler,
};

export function middlewareCreator(fin: any, config:IConfig):Middleware {
    return (
        (store?:Store<any>) => {
            init(fin,config,store);
            const libDispatchFieldName = config.libDispatchFieldName?config.libDispatchFieldName:void 0;
            return (next:Function) => (action:Action<any>) => {
                if (libDispatchFieldName){
                    action[LIB_REDUX_DISPATCH_FIELD_NAME] = libDispatchFieldName;
                }
                const actionHanlderParams : ActionHandlerParams = {
                    fin, store, next, action,
                };
                const handler = actionHandlers[action.type];
                if (handler){
                    handler(actionHanlderParams);
                }else if (sharedActionDict.has(action.type)){
                    sharedActionHandler(action);
                    return next(action);
                }else{
                    return next(action);
                }
            }
        }
    )as Middleware
}