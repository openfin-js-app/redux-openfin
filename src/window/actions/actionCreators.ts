import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const getCurrent:ActionCreator<types.GetCurrentPayload> = createFSA<types.GetCurrentPayload>(
    actionTypes.GET_CURRENT,
    (options:types.GetCurrentPayload) => <any> options
);

export const wrap:ActionCreator<types.WrapPayload> = createFSA<types.WrapPayload>(
    actionTypes.WRAP,
    (options:types.WrapPayload) => <any> options
);

export const addListener:ActionCreator<types.AddListenerPayload> = createFSA<types.AddListenerPayload>(
    actionTypes.ADD_LISTENER,
    (options:types.AddListenerPayload) => <any> options
);

export const authenticate:ActionCreator<types.AuthenticatePayload> = createFSA<types.AuthenticatePayload>(
    actionTypes.AUTHENTICATE,
    (options:types.AuthenticatePayload) => <any> options
);

export const bringToFront:ActionCreator<types.BringToFrontPayload> = createFSA<types.BringToFrontPayload>(
    actionTypes.BRING_TO_FRONT,
    (options:types.BringToFrontPayload) => <any> options
);

export const createWindow:ActionCreator<types.CreateWindowPayload> = createFSA<types.CreateWindowPayload>(
    actionTypes.CREATE_WINDOW,
    (options:types.CreateWindowPayload) => <any> options
);

export const close:ActionCreator<types.ClosePayload> = createFSA<types.ClosePayload>(
    actionTypes.CLOSE,
    (options:types.ClosePayload) => <any> options
);

export const disableUserMovement:ActionCreator<types.DisableUserMovementPayload> = createFSA<types.DisableUserMovementPayload>(
    actionTypes.DISABLE_USER_MOVEMENT,
    (options:types.DisableUserMovementPayload) => <any> options
);

export const enableUserMovement:ActionCreator<types.EnableUserMovementPayload> = createFSA<types.EnableUserMovementPayload>(
    actionTypes.ENABLE_USER_MOVEMENT,
    (options:types.EnableUserMovementPayload) => <any> options
);

export const focus:ActionCreator<types.FocusPayload> = createFSA<types.FocusPayload>(
    actionTypes.FOCUS,
    (options:types.FocusPayload) => <any> options
);

export const getBounds:ActionCreator<types.GetBoundsPayload> = createFSA<types.GetBoundsPayload>(
    actionTypes.GET_BOUNDS,
    (options:types.GetBoundsPayload) => <any> options
);

export const getGroup:ActionCreator<types.GetGroupPayload> = createFSA<types.GetGroupPayload>(
    actionTypes.GET_GROUP,
    (options:types.GetGroupPayload) => <any> options
);

export const getState:ActionCreator<types.GetStatePayload> = createFSA<types.GetStatePayload>(
    actionTypes.GET_STATE,
    (options:types.GetStatePayload) => <any> options
);

export const getOptions:ActionCreator<types.GetOptionsPayload> = createFSA<types.GetOptionsPayload>(
    actionTypes.GET_OPTIONS,
    (options:types.GetOptionsPayload) => <any> options
);

export const hide:ActionCreator<types.HidePayload> = createFSA<types.HidePayload>(
    actionTypes.HIDE,
    (options:types.HidePayload) => <any> options
);

export const joinGroup:ActionCreator<types.JoinGroupPayload> = createFSA<types.JoinGroupPayload>(
    actionTypes.JOIN_GROUP,
    (options:types.JoinGroupPayload) => <any> options
);

export const leaveGroup:ActionCreator<types.LeaveGroupPayload> = createFSA<types.LeaveGroupPayload>(
    actionTypes.LEAVE_GROUP,
    (options:types.LeaveGroupPayload) => <any> options
);

export const minimize:ActionCreator<types.MinimizePayload> = createFSA<types.MinimizePayload>(
    actionTypes.MINIMIZE,
    (options:types.MinimizePayload) => <any> options
);

export const maximize:ActionCreator<types.MaximizePayload> = createFSA<types.MaximizePayload>(
    actionTypes.MAXIMIZE,
    (options:types.MaximizePayload) => <any> options
);

export const mergeGroups:ActionCreator<types.MergeGroupsPayload> = createFSA<types.MergeGroupsPayload>(
    actionTypes.MERGE_GROUPS,
    (options:types.MergeGroupsPayload) => <any> options
);

export const moveBy:ActionCreator<types.MoveByPayload> = createFSA<types.MoveByPayload>(
    actionTypes.MOVE_BY,
    (options:types.MoveByPayload) => <any> options
);

export const moveTo:ActionCreator<types.MoveToPayload> = createFSA<types.MoveToPayload>(
    actionTypes.MOVE_TO,
    (options:types.MoveToPayload) => <any> options
);

export const restore:ActionCreator<types.RestorePayload> = createFSA<types.RestorePayload>(
    actionTypes.RESTORE,
    (options:types.RestorePayload) => <any> options
);

export const show:ActionCreator<types.ShowPayload> = createFSA<types.ShowPayload>(
    actionTypes.SHOW,
    (options:types.ShowPayload) => <any> options
);

export const setAsForeground:ActionCreator<types.SetAsForegroundPayload> = createFSA<types.SetAsForegroundPayload>(
    actionTypes.SET_AS_FOREGROUND,
    (options:types.SetAsForegroundPayload) => <any> options
);

export const setBounds:ActionCreator<types.SetBoundsPayload> = createFSA<types.SetBoundsPayload>(
    actionTypes.SET_BOUNDS,
    (options:types.SetBoundsPayload) => <any> options
);

export const updateOptions:ActionCreator<types.UpdateOptionsPayload> = createFSA<types.UpdateOptionsPayload>(
    actionTypes.UPDATE_OPTIONS,
    (options:types.UpdateOptionsPayload) => <any> options
);

