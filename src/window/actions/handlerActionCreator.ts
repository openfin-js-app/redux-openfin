import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const addEventListenerRes:ActionCreator<types.AddEventListenerResPayload> = createFSA<types.AddEventListenerResPayload>(
    actionTypes.ADD_EVENT_LISTENER_RES,
    (options:types.AddEventListenerResPayload) => <any> options
);

export const newWindowRes:ActionCreator<types.NewWindowResPayload> = createFSA<types.NewWindowResPayload>(
    actionTypes.NEW_WINDOWS_RES,
    (options:types.NewWindowResPayload) => <any> options
);

export const closeRes:ActionCreator<types.CloseResPayload> = createFSA<types.CloseResPayload>(
    actionTypes.CLOSE_RES,
    (options:types.CloseResPayload) => <any> options
);

export const disableFrameRes:ActionCreator<types.DisableFrameResPayload> = createFSA<types.DisableFrameResPayload>(
    actionTypes.DISABLE_FRAME_RES,
    (options:types.DisableFrameResPayload) => <any> options
);

export const enableFrameRes:ActionCreator<types.EnableFrameResPayload> = createFSA<types.EnableFrameResPayload>(
    actionTypes.ENABLE_FRAME_RES,
    (options:types.EnableFrameResPayload) => <any> options
);

export const focusRes:ActionCreator<types.FocusResPayload> = createFSA<types.FocusResPayload>(
    actionTypes.FOCUS_RES,
    (options:types.FocusResPayload) => <any> options
);

export const getBoundsRes:ActionCreator<types.GetBoundsResPayload> = createFSA<types.GetBoundsResPayload>(
    actionTypes.GET_BOUNDS_RES,
    (options:types.GetBoundsResPayload) => <any> options
);

export const getGroupRes:ActionCreator<types.GetGroupResPayload> = createFSA<types.GetGroupResPayload>(
    actionTypes.GET_GROUP_RES,
    (options:types.GetGroupResPayload) => <any> options
);


export const getStateRes:ActionCreator<types.GetStateResPayload> = createFSA<types.GetStateResPayload>(
    actionTypes.GET_STATE_RES,
    (options:types.GetStateResPayload) => <any> options
);

export const getOptionsRes:ActionCreator<types.GetOptionsResPayload> = createFSA<types.GetOptionsResPayload>(
    actionTypes.GET_OPTIONS_RES,
    (options:types.GetOptionsResPayload) => <any> options
);

export const hideRes:ActionCreator<types.HideResPayload> = createFSA<types.HideResPayload>(
    actionTypes.HIDE_RES,
    (options:types.HideResPayload) => <any> options
);

export const joinGroupRes:ActionCreator<types.JoinGroupResPayload> = createFSA<types.JoinGroupResPayload>(
    actionTypes.JOIN_GROUP_RES,
    (options:types.JoinGroupResPayload) => <any> options
);

export const leaveGroupRes:ActionCreator<types.LeaveGroupResPayload> = createFSA<types.LeaveGroupResPayload>(
    actionTypes.LEAVE_GROUP_RES,
    (options:types.LeaveGroupResPayload) => <any> options
);

export const minimizeRes:ActionCreator<types.MinimizeResPayload> = createFSA<types.MinimizeResPayload>(
    actionTypes.MINIMIZE_RES,
    (options:types.MinimizeResPayload) => <any> options
);

export const maximizeRes:ActionCreator<types.MaximizeResPayload> = createFSA<types.MaximizeResPayload>(
    actionTypes.MAXIMIZE_RES,
    (options:types.MaximizeResPayload) => <any> options
);

export const mergeGroupsRes:ActionCreator<types.MergeGroupsResPayload> = createFSA<types.MergeGroupsResPayload>(
    actionTypes.MERGE_GROUPS_RES,
    (options:types.MergeGroupsResPayload) => <any> options
);

export const moveByRes:ActionCreator<types.MoveByResPayload> = createFSA<types.MoveByResPayload>(
    actionTypes.MOVE_BY_RES,
    (options:types.MoveByResPayload) => <any> options
);

export const moveToRes:ActionCreator<types.MoveToResPayload> = createFSA<types.MoveToResPayload>(
    actionTypes.MOVE_TO_RES,
    (options:types.MoveToResPayload) => <any> options
);

export const restoreRes:ActionCreator<types.RestoreResPayload> = createFSA<types.RestoreResPayload>(
    actionTypes.RESTORE_RES,
    (options:types.RestoreResPayload) => <any> options
);

export const showRes:ActionCreator<types.ShowResPayload> = createFSA<types.ShowResPayload>(
    actionTypes.SHOW_RES,
    (options:types.ShowResPayload) => <any> options
);

export const setAsForegroundRes:ActionCreator<types.SetAsForegroundResPayload> = createFSA<types.SetAsForegroundResPayload>(
    actionTypes.SET_AS_FOREGROUND_RES,
    (options:types.SetAsForegroundResPayload) => <any> options
);

export const setBoundsRes:ActionCreator<types.SetBoundsResPayload> = createFSA<types.SetBoundsResPayload>(
    actionTypes.SET_BOUNDS_RES,
    (options:types.SetBoundsResPayload) => <any> options
);

export const updateOptionsRes:ActionCreator<types.UpdateOptionsResPayload> = createFSA<types.UpdateOptionsResPayload>(
    actionTypes.UPDATE_OPTIONS_RES,
    (options:types.UpdateOptionsResPayload) => <any> options
);

