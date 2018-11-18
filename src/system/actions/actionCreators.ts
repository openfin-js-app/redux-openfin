import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const getMachineId:ActionCreator<types.GetMachineIdPayload> = createFSA<types.GetMachineIdPayload>(
    actionTypes.GET_MACHINE_ID,
    (options:types.GetMachineIdPayload) => <any> options
);

export const getDeviceUserId:ActionCreator<types.GetDeviceUserIdPayload> = createFSA<types.GetDeviceUserIdPayload>(
    actionTypes.GET_DEVICE_USER_ID,
    (options:types.GetDeviceUserIdPayload) => <any> options
);

export const getMonitorInfo:ActionCreator<types.GetMonitorInfoPayload> = createFSA<types.GetMonitorInfoPayload>(
    actionTypes.GET_MONITOR_INFO,
    (options:types.GetMonitorInfoPayload) => <any> options
);

export const getVersion:ActionCreator<types.GetVersionPayload> = createFSA<types.GetVersionPayload>(
    actionTypes.GET_VERSION,
    (options:types.GetVersionPayload) => <any> options
);

export const getHostSpecs:ActionCreator<types.GetHostSpecsPayload> = createFSA<types.GetHostSpecsPayload>(
    actionTypes.GET_HOST_SPECS,
    (options:types.GetHostSpecsPayload) => <any> options
);


export const getEnvironmentVariable:ActionCreator<types.GetEnvironmentVariablePayload> = createFSA<types.GetEnvironmentVariablePayload>(
    actionTypes.GET_ENVIRONMENT_VARIABLE,
    (options:types.GetEnvironmentVariablePayload) => <any> options
);

export const clearCache:ActionCreator<types.ClearCachePayload> = createFSA<types.ClearCachePayload>(
    actionTypes.CLEAR_CACHE,
    (options:types.ClearCachePayload) => <any> options
);