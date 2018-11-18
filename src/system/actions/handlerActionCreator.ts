import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const getMachineIdRes:ActionCreator<types.GetMachineIdResPayload> = createFSA<types.GetMachineIdResPayload>(
    actionTypes.GET_MACHINE_ID_RES,
    (options:types.GetMachineIdResPayload) => <any> options
);

export const getDeviceUserIdRes:ActionCreator<types.GetDeviceUserIdResPayload> = createFSA<types.GetDeviceUserIdResPayload>(
    actionTypes.GET_DEVICE_USER_ID_RES,
    (options:types.GetDeviceUserIdResPayload) => <any> options
);

export const getMonitorInfoRes:ActionCreator<types.GetMonitorInfoResPayload> = createFSA<types.GetMonitorInfoResPayload>(
    actionTypes.GET_MONITOR_INFO_RES,
    (options:types.GetMonitorInfoResPayload) => <any> options
);

export const getVersionRes:ActionCreator<types.GetVersionResPayload> = createFSA<types.GetVersionResPayload>(
    actionTypes.GET_VERSION_RES,
    (options:types.GetVersionResPayload) => <any> options
);

export const getHostSpecsRes:ActionCreator<types.GetHostSpecsResPayload> = createFSA<types.GetHostSpecsResPayload>(
    actionTypes.GET_HOST_SPECS_RES,
    (options:types.GetHostSpecsResPayload) => <any> options
);


export const getEnvironmentVariableRes:ActionCreator<types.GetEnvironementVariableResPaylod> = createFSA<types.GetEnvironementVariableResPaylod>(
    actionTypes.GET_ENVIRONMENT_VARIABLE_RES,
    (options:types.GetEnvironementVariableResPaylod) => <any> options
);

export const clearCacheRes:ActionCreator<types.ClearCacheResPayload> = createFSA<types.ClearCacheResPayload>(
    actionTypes.CLEAR_CACHE_RES,
    (options:types.ClearCacheResPayload) => <any> options
);