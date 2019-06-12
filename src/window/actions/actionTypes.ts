import { makeReqType, makeResType } from '../../utils/makeType';

export const GET_CURRENT = makeReqType('GET_CURRENT');
export const GET_CURRENT_RES = makeResType('GET_CURRENT_RES');

export const WRAP = makeReqType('WRAP');
export const WRAP_RES = makeResType('WRAP_RES');

export const ADD_EVENT_LISTENER = makeReqType('ADD_EVENT_LISTENER');
export const ADD_EVENT_LISTENER_RES = makeResType('ADD_EVENT_LISTENER_RES');

export const AUTHENTICATE = makeReqType('AUTHENTICATE');
export const AUTHENTICATE_RES = makeResType('AUTHENTICATE_RES');

export const BRING_TO_FRONT = makeReqType('BRING_TO_FRONT');
export const BRING_TO_FRONT_RES = makeResType('BRING_TO_FRONT_RES');

export const CREATE_WINDOW = makeReqType('CREATE_WINDOW');
export const CREATE_WINDOW_RES = makeResType('CREATE_WINDOW_RES');

export const CLOSE = makeReqType('CLOSE');
export const CLOSE_RES = makeResType('CLOSE_RES');

export const DISABLE_USER_MOVEMENT = makeReqType('DISABLE_USER_MOVEMENT');
export const DISABLE_USER_MOVEMENT_RES = makeResType('DISABLE_USER_MOVEMENT_RES');

export const ENABLE_USER_MOVEMENT = makeReqType('ENABLE_USER_MOVEMENT');
export const ENABLE_USER_MOVEMENT_RES = makeResType('ENABLE_USER_MOVEMENT_RES');

export const FOCUS = makeReqType('FOCUS');
export const FOCUS_RES = makeResType('FOCUS_RES');

export const GET_GROUP = makeReqType('GET_GROUP');
export const GET_GROUP_RES = makeResType('GET_GROUP_RES');

export const GET_BOUNDS = makeReqType('GET_BOUNDS');
export const GET_BOUNDS_RES = makeResType('GET_BOUNDS_RES');

export const GET_STATE = makeReqType('GET_STATE');
export const GET_STATE_RES = makeResType('GET_STATE_RES');

export const GET_OPTIONS = makeReqType('GET_OPTIONS');
export const GET_OPTIONS_RES = makeResType('GET_OPTIONS_RES');

export const HIDE = makeReqType('HIDE');
export const HIDE_RES = makeResType('HIDE_RES');

export const JOIN_GROUP = makeReqType('JOIN_GROUP');
export const JOIN_GROUP_RES = makeResType('JOIN_GROUP_RES');

export const LEAVE_GROUP = makeReqType('LEAVE_GROUP');
export const LEAVE_GROUP_RES = makeResType('LEAVE_GROUP_RES');

export const MINIMIZE = makeReqType('MINIMIZE');
export const MINIMIZE_RES = makeResType('MINIMIZE_RES');

export const MAXIMIZE = makeReqType('MAXIMIZE');
export const MAXIMIZE_RES = makeResType('MAXIMIZE_RES');

export const MERGE_GROUPS = makeReqType('MERGE_GROUPS');
export const MERGE_GROUPS_RES = makeResType('MERGE_GROUPS_RES');

export const MOVE_BY = makeReqType('MOVE_BY');
export const MOVE_BY_RES = makeResType('MOVE_BY_RES');

export const MOVE_TO = makeReqType('MOVE_TO');
export const MOVE_TO_RES = makeResType('MOVE_TO_RES');

export const RESTORE = makeReqType('RESTORE');
export const RESTORE_RES = makeResType('RESTORE_RES');

export const SHOW = makeReqType('SHOW');
export const SHOW_RES = makeResType('SHOW_RES');

export const SET_AS_FOREGROUND = makeReqType('SET_AS_FOREGROUND');
export const SET_AS_FOREGROUND_RES = makeResType('SET_AS_FOREGROUND_RES');

export const SET_BOUNDS = makeReqType('SET_BOUNDS');
export const SET_BOUNDS_RES = makeResType('SET_BOUNDS_RES');

export const UPDATE_OPTIONS = makeReqType('UPDATE_OPTIONS');
export const UPDATE_OPTIONS_RES = makeResType('UPDATE_OPTIONS_RES');
