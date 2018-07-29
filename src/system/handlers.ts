import {ActionHandlerParams} from "../GlobalTypes";
import * as handlerActions from './actions/handlerActionCreator';
import * as types from './types';

const GET_DEVICE_ID_ERROR_MSG = 'OpenFin API call System.getDeviceid() failed.';
const GET_DEVICE_USER_ID_ERROR_MSG = 'OpenFin API call System.getDeviceUserId() failed.';
const GET_MONITOR_INFO_ERROR_MSG = 'OpenFin API call System.getMonitorInfo() failed.';
const GET_VERSION_ERROR_MSG = 'OpenFin API call System.getVersion() failed.';
const GET_HOST_SPECS_ERROR_MSG = 'OpenFin API call System.getHostSpecs() failed.';
const GET_ENVIRONMENT_VARIABLE_ERROR_MSG = 'OpenFin API call System.getEnvironmentVariable() failed.';
const CLEAR_CACHE_ERROR_MSG = 'OpenFin API call System.clearCache() failed.';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceId
export const getDeviceIdHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.getDeviceIdRes({}) as any
        );
        return callback();
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

    const wrappedCallback = () => {
        dispatch(
            handlerActions.getDeviceUserIdRes({}) as any
        );
        return callback();
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

    const wrappedCallback = () => {
        dispatch(
            handlerActions.getMonitorInfoRes({}) as any
        );
        return callback();
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

    const wrappedCallback = () => {
        dispatch(
            handlerActions.getVersionRes({}) as any
        );
        return callback();
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

    const wrappedCallback = () => {
        dispatch(
            handlerActions.getHostSpecsRes({}) as any
        );
        return callback();
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
    const { action, fin, store:{ dispatch } }=params;
    const { env, callback, errorCallback } = action.payload;

    const wrappedCallback = (value:string) => {
        dispatch(
            handlerActions.getEnvironmentVariableRes({env,value}) as any
        );
        return callback(value);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_ENVIRONMENT_VARIABLE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getEnvironmentVariableRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    fin.desktop.System.getEnvironmentVariable(env,wrappedCallback,wrappedErrorCallback);
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
