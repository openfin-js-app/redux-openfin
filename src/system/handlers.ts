import {ActionHandlerParams} from "../GlobalTypes";
import * as handlerActions from './actions/handlerActionCreator';
import * as types from './types';
import * as async from './async';

import {
    GET_DEVICE_ID_ERROR_MSG,
    GET_DEVICE_USER_ID_ERROR_MSG,
    GET_MONITOR_INFO_ERROR_MSG,
    GET_VERSION_ERROR_MSG,
    GET_HOST_SPECS_ERROR_MSG,
    GET_ENVIRONMENT_VARIABLE_ERROR_MSG,
    CLEAR_CACHE_ERROR_MSG,
} from './types';
import {Action} from "redux-actions";

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceId
export const getDeviceIdHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (id:string) => {
        dispatch(
            handlerActions.getDeviceIdRes({id}) as any
        );
        return callback(id);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_DEVICE_ID_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getDeviceIdRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getDeviceId(wrappedCallback,wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceUserId
export const getDeviceUserIdHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (id:string) => {
        dispatch(
            handlerActions.getDeviceUserIdRes({id}) as any
        );
        return callback(id);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_DEVICE_USER_ID_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getDeviceUserIdRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getDeviceUserId(wrappedCallback,wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getMonitorInfo
export const getMonitorInfoHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (monitorInfo:any) => {
        dispatch(
            handlerActions.getMonitorInfoRes(monitorInfo) as any
        );
        return callback(monitorInfo);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_MONITOR_INFO_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getMonitorInfoRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getMonitorInfo(wrappedCallback,wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getVersion
export const getVersionHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (version:string) => {
        dispatch(
            handlerActions.getVersionRes({version}) as any
        );
        return callback(version);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_VERSION_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getVersionRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getVersion(wrappedCallback,wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getHostSpecs
export const getHostSpecsHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (info:types.GetHostSpecsResPayload) => {
        dispatch(
            handlerActions.getHostSpecsRes(info) as any
        );
        return callback(info);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_HOST_SPECS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getHostSpecsRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getHostSpecs(wrappedCallback,wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getEnvironmentVariable
export const getEnvironmentVariableHandler = (params:ActionHandlerParams) => {
    const { action, store:{ dispatch } }=params;
    async.getEnvironmentVariable(action).then(
        ((responseAction:Action<types.GetEnvironementVariableResPaylod>)=>{
            dispatch(responseAction);
        })
    ).catch((error)=>{
        dispatch(handlerActions.getEnvironmentVariableRes({
            name:'Error',
            error
        } ) as any);
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.clearCache
export const clearCacheHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { options, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.clearCacheRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : CLEAR_CACHE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.clearCacheRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.clearCache(options,wrappedCallback,wrappedErrorCallback);
};
