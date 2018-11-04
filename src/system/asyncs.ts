import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    GET_MACHINE_ID_ERROR_MSG,
    GET_DEVICE_USER_ID_ERROR_MSG,
    GET_MONITOR_INFO_ERROR_MSG,
    GET_VERSION_ERROR_MSG,
    GET_HOST_SPECS_ERROR_MSG,
    GET_ENVIRONMENT_VARIABLE_ERROR_MSG,
    CLEAR_CACHE_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceId
export async function getDeviceId(action:Action<types.GetMachineIdPayload>):Promise<Action<types.GetMachineIdResPayload>>{
    return createAsyncFun<types.GetMachineIdPayload,types.GetMachineIdResPayload>(
        action,
        GET_MACHINE_ID_ERROR_MSG,
        handlerActions.getMachineIdRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getMachineId(
                (id:string)=>{
                    const responseAction = resActionCreator({id});
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceUserId
export async function getDeviceUserId(action:Action<types.GetDeviceUserIdPayload>):Promise<Action<types.GetDeviceUserIdResPayload>>{
    return createAsyncFun<types.GetDeviceUserIdPayload,types.GetDeviceUserIdResPayload>(
        action,
        GET_DEVICE_USER_ID_ERROR_MSG,
        handlerActions.getDeviceUserIdRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getDeviceUserId(
                (id:string)=>{
                    const responseAction = resActionCreator({id});
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getMonitorInfo
export async function getMonitorInfo(action:Action<types.GetMonitorInfoPayload>):Promise<Action<types.GetMonitorInfoResPayload>>{
    return createAsyncFun<types.GetMonitorInfoPayload,types.GetMonitorInfoResPayload>(
        action,
        GET_MONITOR_INFO_ERROR_MSG,
        handlerActions.getMonitorInfoRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getMonitorInfo(
                (monitorInfo:any)=>{
                    const responseAction = resActionCreator(monitorInfo);
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getVersion
export async function getVersion(action:Action<types.GetVersionPayload>):Promise<Action<types.GetVersionResPayload>>{
    return createAsyncFun<types.GetVersionPayload,types.GetVersionResPayload>(
        action,
        GET_VERSION_ERROR_MSG,
        handlerActions.getVersionRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getVersion(
                (version:string)=>{
                    const responseAction = resActionCreator({version});
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getHostSpecs
export async function getHostSpecs(action:Action<types.GetHostSpecsPayload>):Promise<Action<types.GetHostSpecsResPayload>>{
    return createAsyncFun<types.GetHostSpecsPayload,types.GetHostSpecsResPayload>(
        action,
        GET_HOST_SPECS_ERROR_MSG,
        handlerActions.getHostSpecsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getHostSpecs(
                (info:types.GetHostSpecsResPayload)=>{
                    const responseAction = resActionCreator(info);
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}


//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getEnvironmentVariable
export async function getEnvironmentVariable(action:Action<types.GetEnvironmentVariablePayload>)
    :Promise<Action<types.GetEnvironementVariableResPaylod>>
{
    const { env } = action.payload;
    return createAsyncFun<types.GetEnvironmentVariablePayload,types.GetEnvironementVariableResPaylod>(
        action,
        GET_ENVIRONMENT_VARIABLE_ERROR_MSG,
        handlerActions.getEnvironmentVariableRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.getEnvironmentVariable(
                env,
                (value:string)=>{
                    const responseAction = resActionCreator({env,value});
                    succCb(responseAction);
                },
                errCb
            );
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.clearCache
export async function clearCache(action:Action<types.ClearCachePayload>):Promise<Action<types.ClearCacheResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.ClearCachePayload,types.ClearCacheResPayload>(
        action,
        CLEAR_CACHE_ERROR_MSG,
        handlerActions.clearCacheRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.System.clearCache(
                options,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },
                errCb
            );
        }
    );

}