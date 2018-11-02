import {ActionHandlerParams} from "../GlobalTypes";
import * as async from './async';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceId
export const getDeviceIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getDeviceId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceUserId
export const getDeviceUserIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getDeviceUserId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getMonitorInfo
export const getMonitorInfoHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getMonitorInfo(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getVersion
export const getVersionHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getVersion(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getHostSpecs
export const getHostSpecsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getHostSpecs(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getEnvironmentVariable
export const getEnvironmentVariableHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.getEnvironmentVariable(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.clearCache
export const clearCacheHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    async.clearCache(action).catch((e)=>{
        // eat the exception
    });
};
