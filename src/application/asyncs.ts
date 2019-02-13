import {Action} from 'redux-actions';

import { initState } from '../init';

import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    NEW_APPLICAITON_ERROR_MSG,
    APPLICATION_GET_CURRENT_ERROR_MSG,
    APPLICATION_GET_WINDOW_ERROR_MSG,
    APPLICATION_WRAP_ERROR_MSG,
    APPLICATION_ADD_EVENT_LISTENER_ERROR_MSG,
    CLOSE_ERROR_MSG,
    APPLICATION_GET_CHILD_WINDOWS_ERROR_MSG,
    APPLICATION_GET_INFO_ERROR_MSG,
    APPLICATION_GET_SHORTCUTS_ERROR_MSG,
    APPLICATION_GET_TRAY_ICON_INFO_ERROR_MSG,
    APPLICATION_GET_ZOOM_LEVEL_ERROR_MSG,
    APPLICATION_IS_RUNNING_ERROR_MSG,
    APPLICATION_REMOVE_EVENT_LISTENER_ERROR_MSG,
    RESTART_ERROR_MSG,
    APPLICATION_SCHEDULE_RESTART_ERROR_MSG,
    APPLICATION_SET_SHORTCUTS_ERROR_MSG,
    APPLICATION_SET_TRAY_ICON_ERROR_MSG,
    APPLICATION_SET_ZOOM_LEVEL_ERROR_MSG,
    APPLICATION_TERMINATE_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#Application
export async function newApplication(action:Action<types.NewApplicationPayload>):Promise<Action<types.NewApplicationResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.NewApplicationPayload,types.NewApplicationResPayload>(
        action,
        NEW_APPLICAITON_ERROR_MSG,
        handlerActions.newApplicationRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let app = new fin.desktop.Application(options,
                (app:any)=>{
                    const responseAction = resActionCreator({app});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#.getCurrent
export async function getCurrent(action:Action<types.GetCurrentPayload>):Promise<Action<types.GetCurrentResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.GetCurrentPayload,types.GetCurrentResPayload>(
        action,
        APPLICATION_GET_CURRENT_ERROR_MSG,
        handlerActions.getCurrentRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let application;
            if (initState.currentApplication){
                application = initState.currentApplication;
            }else{
                application = fin.desktop.Application.getCurrent();
                initState.currentApplication = application;
            }
            const responseAction = resActionCreator({application});
            succCb(responseAction);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getWindow
export async function getWindow(action:Action<types.GetWindowPayload>):Promise<Action<types.GetWindowResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.GetWindowPayload,types.GetWindowResPayload>(
        action,
        APPLICATION_GET_WINDOW_ERROR_MSG,
        handlerActions.getWindowRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const mainWindow = initState.currentApplication.getWindow();
            const responseAction = resActionCreator({mainWindow});
            succCb(responseAction);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#.wrap
export async function wrap(action:Action<types.WrapPayload>):Promise<Action<types.WrapResPayload>>{
    const  {uuid}  = action.payload;
    return createAsyncFun<types.WrapPayload,types.WrapResPayload>(
        action,
        APPLICATION_WRAP_ERROR_MSG,
        handlerActions.wrapRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            const application =  fin.desktop.Application.wrap(uuid);
            const responseAction = resActionCreator({application});
            succCb(responseAction);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#addEventListener
export async function addEventListener(action:Action<types.AddEventListenerPayload>):Promise<Action<types.AddEventListenerResPayload>>{
    const  { type , listener }  = action.payload;
    return createAsyncFun<types.AddEventListenerPayload,types.AddEventListenerResPayload>(
        action,
        APPLICATION_ADD_EVENT_LISTENER_ERROR_MSG,
        handlerActions.addEventListenerRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.addEventListener(type,listener,
                ()=>{
                    const responseAction  = resActionCreator({});
                    succCb(responseAction);
                },
                errCb,
            )
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#close
export async function close(action:Action<types.ClosePayload>):Promise<Action<types.CloseResPayload>>{
    const { force } = action.payload;
    return createAsyncFun<types.ClosePayload,types.CloseResPayload>(
        action,
        CLOSE_ERROR_MSG,
        handlerActions.closeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let application = fin.desktop.Application.getCurrent();
            application.close(force,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getChildWindows
export async function getChildWindows(action:Action<types.GetChildWindowsPayload>):Promise<Action<types.GetChildWindowsResPayload>>{
    return createAsyncFun<types.GetChildWindowsPayload,types.GetChildWindowsResPayload>(
        action,
        APPLICATION_GET_CHILD_WINDOWS_ERROR_MSG,
        handlerActions.getChildWindowsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.getChildWindows(
                (children)=>{
                    const responseAction = resActionCreator({children});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getInfo
export async function getInfo(action:Action<types.GetInfoPayload>):Promise<Action<types.GetInfoResPayload>>{
    return createAsyncFun<types.GetInfoPayload,types.GetInfoResPayload>(
        action,
        APPLICATION_GET_INFO_ERROR_MSG,
        handlerActions.getInfoRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.getInfo(
                (info)=>{
                    const responseAction = resActionCreator({info});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getShortcuts
export async function getShortcuts(action:Action<types.GetShortcutsPayload>):Promise<Action<types.GetShortcutsResPayload>>{
    return createAsyncFun<types.GetShortcutsPayload,types.GetShortcutsResPayload>(
        action,
        APPLICATION_GET_SHORTCUTS_ERROR_MSG,
        handlerActions.getShortcutsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.getShortcuts(
                (config)=>{
                    const responseAction = resActionCreator({config});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getTrayIconInfo
export async function getTrayIconInfo(action:Action<types.GetTrayIconInfoPayload>):Promise<Action<types.GetTrayIconInfoResPayload>>{
    return createAsyncFun<types.GetTrayIconInfoPayload,types.GetTrayIconInfoResPayload>(
        action,
        APPLICATION_GET_TRAY_ICON_INFO_ERROR_MSG,
        handlerActions.getTrayIconInfoRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.getTrayIconInfo(
                (trayInfo)=>{
                    const responseAction = resActionCreator({trayInfo});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getZoomLevel
export async function getZoomLevel(action:Action<types.GetZoomLevelPayload>):Promise<Action<types.GetZoomLevelResPayload>>{
    return createAsyncFun<types.GetZoomLevelPayload,types.GetZoomLevelResPayload>(
        action,
        APPLICATION_GET_ZOOM_LEVEL_ERROR_MSG,
        handlerActions.getZoomLevelRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.getZoomLevel(
                (level)=>{
                    const responseAction = resActionCreator({level});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#isRunning
export async function isRunning(action:Action<types.IsRunningPayload>):Promise<Action<types.IsRunningResPayload>>{
    return createAsyncFun<types.IsRunningPayload,types.IsRunningResPayload>(
        action,
        APPLICATION_IS_RUNNING_ERROR_MSG,
        handlerActions.isRunningRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.isRunning(
                (running)=>{
                    const responseAction = resActionCreator({running});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#removeEventListener
export async function removeEventListener(action:Action<types.RemoveEventListenerPayload>):Promise<Action<types.RemoveEventListenerResPayload>>{
    const { type, listener } = action.payload;
    return createAsyncFun<types.RemoveEventListenerPayload,types.RemoveEventListenerResPayload>(
        action,
        APPLICATION_REMOVE_EVENT_LISTENER_ERROR_MSG,
        handlerActions.removeEventListenerRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.removeEventListener(
                type,listener,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#restart
export async function restart(action:Action<types.RestartPayload>):Promise<Action<types.RestartResPayload>>{
    return createAsyncFun<types.RestartPayload,types.NewApplicationResPayload>(
        action,
        RESTART_ERROR_MSG,
        handlerActions.restartRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.restart(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#scheduleRestart
export async function scheduleRestart(action:Action<types.ScheduleRestartPayload>):Promise<Action<types.ScheduleRestartResPayload>>{
    return createAsyncFun<types.ScheduleRestartPayload,types.ScheduleRestartResPayload>(
        action,
        APPLICATION_SCHEDULE_RESTART_ERROR_MSG,
        handlerActions.scheduleRestartRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.scheduleRestart(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setShortcuts
export async function setShortcuts(action:Action<types.SetShortcutsPayload>):Promise<Action<types.SetShortcutsResPayload>>{
    const { config } = action.payload;
    return createAsyncFun<types.SetShortcutsPayload,types.SetShortcutsResPayload>(
        action,
        APPLICATION_SET_SHORTCUTS_ERROR_MSG,
        handlerActions.setShortcutsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.setShortcuts(
                config,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setTrayIcon
export async function setTrayIcon(action:Action<types.SetTrayIconPayload>):Promise<Action<types.SetTrayIconResPayload>>{
    const { iconUrl, listeners } = action.payload;
    return createAsyncFun<types.SetTrayIconPayload,types.SetTrayIconResPayload>(
        action,
        APPLICATION_SET_TRAY_ICON_ERROR_MSG,
        handlerActions.setTrayIconRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.setTrayIcon(
                iconUrl,
                listeners,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setZoomLevel
export async function setZoomLevel(action:Action<types.SetZoomLevelPayload>):Promise<Action<types.SetZoomLevelResPayload>>{
    const { level } = action.payload;
    return createAsyncFun<types.SetZoomLevelPayload,types.SetZoomLevelResPayload>(
        action,
        APPLICATION_SET_ZOOM_LEVEL_ERROR_MSG,
        handlerActions.setZoomLevelRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.setZoomLevel(
                level,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#terminate
export async function terminate(action:Action<types.TerminatePayload>):Promise<Action<types.TerminateResPayload>>{
    return createAsyncFun<types.TerminatePayload,types.TerminateResPayload>(
        action,
        APPLICATION_TERMINATE_ERROR_MSG,
        handlerActions.terminateRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            initState.currentApplication.terminate(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

