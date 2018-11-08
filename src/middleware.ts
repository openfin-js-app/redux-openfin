import {Store, Action, Middleware, MiddlewareAPI } from 'redux';
import { ActionHandlerParams } from './GlobalTypes';

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
    [ApplicationActions.RESTART]:ApplicationHandlers.restartHandler,
    [ApplicationActions.CLOSE]:ApplicationHandlers.closeHandler,
    [InterApplicationActions.PUBLISH]:InterApplicationHandlers.publishHandler,
    [InterApplicationActions.SUBSCRIBE]:InterApplicationHandlers.subscribeHandler,
    [NotificationActions.CREATE_NOTIFICATION]:NotificationHandlers.createNotificationHandler,
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
            initChannel(fin,config,store).catch(e=>{
                throw e;
            });
            init(fin,config,store);
            return (next:Function) => (action:Action) => {
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