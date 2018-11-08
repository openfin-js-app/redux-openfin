import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getMachineId
export const getMachineIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getMachineId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getDeviceUserId
export const getDeviceUserIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getDeviceUserId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getMonitorInfo
export const getMonitorInfoHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getMonitorInfo(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getVersion
export const getVersionHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getVersion(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getHostSpecs
export const getHostSpecsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getHostSpecs(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.getEnvironmentVariable
export const getEnvironmentVariableHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getEnvironmentVariable(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.System.html#.clearCache
export const clearCacheHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.clearCache(action).catch((e)=>{
        // eat the exception
    });
};
