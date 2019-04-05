import { makeReqType, makeResType }  from '../../utils/makeType';

export const GET_MACHINE_ID = makeReqType('GET_MACHINE_ID');
export const GET_MACHINE_ID_RES = makeResType('GET_MACHINE_ID_RES');

export const GET_DEVICE_USER_ID = makeReqType('GET_DEVICE_USER_ID');
export const GET_DEVICE_USER_ID_RES = makeResType('GET_DEVICE_USER_ID_RES');

export const GET_MONITOR_INFO = makeReqType('GET_MONITOR_INFO');
export const GET_MONITOR_INFO_RES = makeResType('GET_MONITOR_INFO_RES');

export const GET_VERSION = makeReqType('GET_VERSION');
export const GET_VERSION_RES = makeResType('GET_VERSION_RES');

export const GET_HOST_SPECS = makeReqType('GET_HOST_SPECS');
export const GET_HOST_SPECS_RES = makeResType('GET_HOST_SPECS_RES');

export const GET_ENVIRONMENT_VARIABLE = makeReqType('GET_ENVIRONMENT_VARIABLE');
export const GET_ENVIRONMENT_VARIABLE_RES = makeResType('GET_ENVIRONMENT_VARIABLE_RES');

export const CLEAR_CACHE = makeReqType('CLEAR_CACHE');
export const CLEAR_CACHE_RES = makeResType('CLEAR_CACHE_RES');