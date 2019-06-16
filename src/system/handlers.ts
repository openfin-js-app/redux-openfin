import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getMachineId
export const getMachineIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getMachineId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getDeviceUserId
export const getDeviceUserIdHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getDeviceUserId(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getMonitorInfo
export const getMonitorInfoHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getMonitorInfo(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getVersion
export const getVersionHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getVersion(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getHostSpecs
export const getHostSpecsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getHostSpecs(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.getEnvironmentVariable
export const getEnvironmentVariableHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getEnvironmentVariable(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.System.html#.clearCache
export const clearCacheHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.clearCache(action).catch((e)=>{
        // eat the exception
    });
};
