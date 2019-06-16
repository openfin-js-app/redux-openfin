import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import wrapAsyncFun from '../utils/wrapAsyncFun'

export async function getMachineId(action:Action<types.GetMachineIdPayload>):Promise<Action<types.GetMachineIdResPayload>>{
    return wrapAsyncFun<types.GetMachineIdPayload,types.GetMachineIdResPayload>(
        action,
        handlerActions.getMachineIdRes,
        async (fin)=>{
            const id = await fin.System.getMachineId();
            return handlerActions.getMachineIdRes({id});
        }
    );
}

export async function getDeviceUserId(action:Action<types.GetDeviceUserIdPayload>):Promise<Action<types.GetDeviceUserIdResPayload>>{
    return wrapAsyncFun<types.GetDeviceUserIdPayload,types.GetDeviceUserIdResPayload>(
        action,
        handlerActions.getDeviceUserIdRes,
        async (fin)=>{
            const id = await fin.System.getDeviceUserId();
            return handlerActions.getDeviceUserIdRes({id});
        }
    );
}

export async function getMonitorInfo(action:Action<types.GetMonitorInfoPayload>):Promise<Action<types.GetMonitorInfoResPayload>>{
    return wrapAsyncFun<types.GetMonitorInfoPayload,types.GetMonitorInfoResPayload>(
        action,
        handlerActions.getMonitorInfoRes,
        async (fin)=>{
            const monitorInfo = await fin.System.getMonitorInfo();
            return handlerActions.getMonitorInfoRes(monitorInfo);
        }
    );
}

export async function getVersion(action:Action<types.GetVersionPayload>):Promise<Action<types.GetVersionResPayload>>{
    return wrapAsyncFun<types.GetVersionPayload,types.GetVersionResPayload>(
        action,
        handlerActions.getVersionRes,
        async (fin)=>{
            const version = await fin.System.getVersion();
            return handlerActions.getVersionRes({version});
        }
    );
}

export async function getHostSpecs(action:Action<types.GetHostSpecsPayload>):Promise<Action<types.GetHostSpecsResPayload>>{
    return wrapAsyncFun<types.GetHostSpecsPayload,types.GetHostSpecsResPayload>(
        action,
        handlerActions.getHostSpecsRes,
        async (fin)=>{
            const info = await fin.System.getHostSpecs();
            return handlerActions.getHostSpecsRes(info);
        }
    );
}


export async function getEnvironmentVariable(action:Action<types.GetEnvironmentVariablePayload>)
    :Promise<Action<types.GetEnvironementVariableResPaylod>>
{
    const { env } = action.payload;
    return wrapAsyncFun<types.GetEnvironmentVariablePayload,types.GetEnvironementVariableResPaylod>(
        action,
        handlerActions.getEnvironmentVariableRes,
        async (fin)=>{
            const value = await fin.System.getEnvironmentVariable(env);
            return handlerActions.getEnvironmentVariableRes({env,value});
        }
    );
}

export async function clearCache(action:Action<types.ClearCachePayload>):Promise<Action<types.ClearCacheResPayload>>{
    const  options  = action.payload;
    return wrapAsyncFun<types.ClearCachePayload,types.ClearCacheResPayload>(
        action,
        handlerActions.clearCacheRes,
        async (fin)=>{
            await fin.System.clearCache(options);
            return handlerActions.clearCacheRes({});
        }
    );
}