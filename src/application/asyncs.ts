import {Action} from 'redux-actions';

import { initState } from '../init';

import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import wrapAsyncFun from '../utils/wrapAsyncFun'

import {FinWindow, ISetShortCutsConfig, ITrayIconHoverEvent} from "../GlobalTypes";

/**
 * Wrappered apis of Application package
 * //https://cdn.openfin.co/docs/javascript/stable/Application.html
 */


export async function start(action:Action<types.StartApplicationPayload>):Promise<Action<types.StartApplicationResPayload>>{
    const  options  = action.payload;
    return wrapAsyncFun<types.StartApplicationPayload,types.StartApplicationResPayload>(
        action,
        handlerActions.startApplicationRes,
        async (fin)=>{
            let app = await fin.Application.start(options);
            return handlerActions.startApplicationRes({app});
        }
    );
}

export async function getCurrent(action:Action<types.GetCurrentPayload>):Promise<Action<types.GetCurrentResPayload>>{
    return await wrapAsyncFun<types.GetCurrentPayload,types.GetCurrentResPayload>(
        action,
        handlerActions.getCurrentRes,
        async(fin)=>{
            let application;
            if (initState.currentApplication){
                application = initState.currentApplication;
            }else{
                application = await fin.Application.getCurrent();
                initState.currentApplication = application;
            }
            return handlerActions.getCurrentRes({application});
        }
    );
}

export async function getWindow(action:Action<types.GetWindowPayload>):Promise<Action<types.GetWindowResPayload>>{
    return wrapAsyncFun<types.GetWindowPayload,types.GetWindowResPayload>(
        action,
        handlerActions.getWindowRes,
        async (fin)=>{
            const mainWindow = await initState.currentApplication.getWindow();
            return handlerActions.getWindowRes({mainWindow});
        }
    );
}

export async function wrap(action:Action<types.WrapPayload>):Promise<Action<types.WrapResPayload>>{
    const  {uuid}  = action.payload;
    return wrapAsyncFun<types.WrapPayload,types.WrapResPayload>(
        action,
        handlerActions.wrapRes,
        async (fin)=>{
            const application =  await fin.Application.wrap({uuid});
            return  handlerActions.wrapRes({application});
        }
    );
}

export async function addListener(action:Action<types.AddListenerPayload>):Promise<Action<types.AddListenerResPayload>>{
    const  { type , listener, options }  = action.payload;
    return wrapAsyncFun<types.AddListenerPayload,types.AddListenerResPayload>(
        action,
        handlerActions.addListenerRes,
        async (fin)=>{
            await initState.currentApplication.addListener(type,listener, options);
            return handlerActions.addListenerRes({});
        }
    );
}

export async function quit(action:Action<types.QuitPayload>):Promise<Action<types.QuitResPayload>>{
    const { force } = action.payload;
    return wrapAsyncFun<types.QuitPayload,types.QuitResPayload>(
        action,
        handlerActions.quitRes,
        async (fin)=>{
            let application = await fin.Application.getCurrent();
            await application.quit(force);
            return handlerActions.quitRes({})
        }
    );
}

export async function getChildWindows(action:Action<types.GetChildWindowsPayload>):Promise<Action<types.GetChildWindowsResPayload>>{
    return wrapAsyncFun<types.GetChildWindowsPayload,types.GetChildWindowsResPayload>(
        action,
        handlerActions.getChildWindowsRes,
        async (fin)=>{
            const children:FinWindow[] = await initState.currentApplication.getChildWindows();
            return handlerActions.getChildWindowsRes({children});
        }
    );
}

export async function getInfo(action:Action<types.GetInfoPayload>):Promise<Action<types.GetInfoResPayload>>{
    return wrapAsyncFun<types.GetInfoPayload,types.GetInfoResPayload>(
        action,
        handlerActions.getInfoRes,
        async(fin)=>{
            const info = await initState.currentApplication.getInfo();
            return handlerActions.getInfoRes({info});
        }
    );
}

export async function getShortcuts(action:Action<types.GetShortcutsPayload>):Promise<Action<types.GetShortcutsResPayload>>{
    return wrapAsyncFun<types.GetShortcutsPayload,types.GetShortcutsResPayload>(
        action,
        handlerActions.getShortcutsRes,
        async (fin)=>{
            const config:ISetShortCutsConfig = await initState.currentApplication.getShortcuts();
            return handlerActions.getShortcutsRes({config});
        }
    );
}

export async function getTrayIconInfo(action:Action<types.GetTrayIconInfoPayload>):Promise<Action<types.GetTrayIconInfoResPayload>>{
    return wrapAsyncFun<types.GetTrayIconInfoPayload,types.GetTrayIconInfoResPayload>(
        action,
        handlerActions.getTrayIconInfoRes,
        async (fin)=>{
            const trayInfo: ITrayIconHoverEvent = await initState.currentApplication.getTrayIconInfo();
            return handlerActions.getTrayIconInfoRes({trayInfo});
        }
    );
}

export async function getZoomLevel(action:Action<types.GetZoomLevelPayload>):Promise<Action<types.GetZoomLevelResPayload>>{
    return wrapAsyncFun<types.GetZoomLevelPayload,types.GetZoomLevelResPayload>(
        action,
        handlerActions.getZoomLevelRes,
        async (fin)=>{
            const level = await initState.currentApplication.getZoomLevel();
            return handlerActions.getZoomLevelRes({level});
        }
    );
}

export async function isRunning(action:Action<types.IsRunningPayload>):Promise<Action<types.IsRunningResPayload>>{
    return wrapAsyncFun<types.IsRunningPayload,types.IsRunningResPayload>(
        action,
        handlerActions.isRunningRes,
        async (fin)=>{
            const running = await initState.currentApplication.isRunning();
            return handlerActions.isRunningRes({running});
        }
    );
}

export async function removeListener(action:Action<types.RemoveListenerPayload>):Promise<Action<types.RemoveListenerResPayload>>{
    const { type, listener, options } = action.payload;
    return wrapAsyncFun<types.RemoveListenerPayload,types.RemoveListenerResPayload>(
        action,
        handlerActions.removeListenerRes,
        async(fin)=>{
            await initState.currentApplication.removeListener( type,listener, options);
            return handlerActions.removeListenerRes({});
        }
    );
}

export async function restart(action:Action<types.RestartPayload>):Promise<Action<types.RestartResPayload>>{
    return wrapAsyncFun<types.RestartPayload,types.RestartResPayload>(
        action,
        handlerActions.restartRes,
        async (fin)=>{
            await initState.currentApplication.restart();
            return handlerActions.restartRes({});
        }
    );
}

export async function scheduleRestart(action:Action<types.ScheduleRestartPayload>):Promise<Action<types.ScheduleRestartResPayload>>{
    return wrapAsyncFun<types.ScheduleRestartPayload,types.ScheduleRestartResPayload>(
        action,
        handlerActions.scheduleRestartRes,
        async (fin)=>{
            await initState.currentApplication.scheduleRestart();
            return handlerActions.scheduleRestartRes({});
        }
    );
}

export async function setShortcuts(action:Action<types.SetShortcutsPayload>):Promise<Action<types.SetShortcutsResPayload>>{
    const { config } = action.payload;
    return wrapAsyncFun<types.SetShortcutsPayload,types.SetShortcutsResPayload>(
        action,
        handlerActions.setShortcutsRes,
        async (fin)=>{
            await initState.currentApplication.setShortcuts(config);
            return handlerActions.setShortcutsRes({});
        }
    );
}

export async function setTrayIcon(action:Action<types.SetTrayIconPayload>):Promise<Action<types.SetTrayIconResPayload>>{
    const { iconUrl } = action.payload;
    return wrapAsyncFun<types.SetTrayIconPayload,types.SetTrayIconResPayload>(
        action,
        handlerActions.setTrayIconRes,
        async (fin)=>{
            await initState.currentApplication.setTrayIcon(iconUrl);
            return handlerActions.setTrayIconRes({});
        }
    );
}

export async function setZoomLevel(action:Action<types.SetZoomLevelPayload>):Promise<Action<types.SetZoomLevelResPayload>>{
    const { level } = action.payload;
    return wrapAsyncFun<types.SetZoomLevelPayload,types.SetZoomLevelResPayload>(
        action,
        handlerActions.setZoomLevelRes,
        async (fin)=>{
            await initState.currentApplication.setZoomLevel(level);
            return handlerActions.setZoomLevelRes({});
        }
    );
}

export async function terminate(action:Action<types.TerminatePayload>):Promise<Action<types.TerminateResPayload>>{
    return wrapAsyncFun<types.TerminatePayload,types.TerminateResPayload>(
        action,
        handlerActions.terminateRes,
        async (fin)=>{
            await initState.currentApplication.terminate();
            return handlerActions.terminateRes({});
        }
    );
}

