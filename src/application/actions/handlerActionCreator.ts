import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const newApplicationRes:ActionCreator<types.NewApplicationResPayload> = createFSA<types.NewApplicationResPayload>(
    actionTypes.NEW_APPLICATION_RES,
    (options:types.NewApplicationResPayload) => <any> options
);

export const getCurrentRes:ActionCreator<types.GetCurrentResPayload> = createFSA<types.GetCurrentResPayload>(
    actionTypes.APPLICATION_GET_CURRENT_RES,
    (options:types.GetCurrentResPayload) => <any> options
);

export const getWindowRes:ActionCreator<types.GetWindowResPayload> = createFSA<types.GetWindowResPayload>(
    actionTypes.APPLICATION_GET_WINDOW_RES,
    (options:types.GetWindowResPayload) => <any> options
);

export const wrapRes:ActionCreator<types.WrapResPayload> = createFSA<types.WrapResPayload>(
    actionTypes.APPLICATION_WRAP_RES,
    (options:types.WrapResPayload) => <any> options
);

export const addEventListenerRes:ActionCreator<types.AddEventListenerResPayload> = createFSA<types.AddEventListenerResPayload>(
    actionTypes.APPLICATION_ADD_EVENT_LISTENER_RES,
    (options:types.AddEventListenerResPayload) => <any> options
);

export const closeRes:ActionCreator<types.CloseResPayload> = createFSA<types.CloseResPayload>(
    actionTypes.CLOSE_RES,
    (options:types.CloseResPayload) => <any> options
);

export const getChildWindowsRes:ActionCreator<types.GetChildWindowsResPayload> = createFSA<types.GetChildWindowsResPayload>(
    actionTypes.APPLICATION_GET_CHILD_WINDOWS_RES,
    (options:types.GetChildWindowsResPayload) => <any> options
);

export const getInfoRes:ActionCreator<types.GetInfoResPayload> = createFSA<types.GetInfoResPayload>(
    actionTypes.APPLICATION_GET_INFO_RES,
    (options:types.GetInfoResPayload) => <any> options
);

export const getShortcutsRes:ActionCreator<types.GetShortcutsResPayload> = createFSA<types.GetShortcutsResPayload>(
    actionTypes.APPLICATION_GET_SHORTCUTS_RES,
    (options:types.GetShortcutsResPayload) => <any> options
);

export const getTrayIconInfoRes:ActionCreator<types.GetTrayIconInfoResPayload> = createFSA<types.GetTrayIconInfoResPayload>(
    actionTypes.APPLICATION_GET_TRAY_ICON_INFO_RES,
    (options:types.GetTrayIconInfoResPayload) => <any> options
);

export const getZoomLevelRes:ActionCreator<types.GetZoomLevelResPayload> = createFSA<types.GetZoomLevelResPayload>(
    actionTypes.APPLICATION_GET_ZOOM_LEVEL_RES,
    (options:types.GetZoomLevelResPayload) => <any> options
);

export const isRunningRes:ActionCreator<types.IsRunningResPayload> = createFSA<types.IsRunningResPayload>(
    actionTypes.APPLICATION_IS_RUNNING_RES,
    (options:types.IsRunningResPayload) => <any> options
);

export const removeEventListenerRes:ActionCreator<types.RemoveEventListenerResPayload> = createFSA<types.RemoveEventListenerResPayload>(
    actionTypes.APPLICATION_REMOVE_EVENT_LISTENER_RES,
    (options:types.RemoveEventListenerResPayload) => <any> options
);

export const restartRes:ActionCreator<types.RestartResPayload> = createFSA<types.RestartResPayload>(
    actionTypes.RESTART_RES,
    (options:types.RestartResPayload) => <any> options
);

export const scheduleRestartRes:ActionCreator<types.ScheduleRestartResPayload> = createFSA<types.ScheduleRestartResPayload>(
    actionTypes.APPLICATION_SCHEDULE_RESTART_RES,
    (options:types.ScheduleRestartResPayload) => <any> options
);


export const setShortcutsRes:ActionCreator<types.SetShortcutsResPayload> = createFSA<types.SetShortcutsResPayload>(
    actionTypes.APPLICATION_SET_SHORTCUTS_RES,
    (options:types.SetShortcutsResPayload) => <any> options
);

export const setTrayIconRes:ActionCreator<types.SetTrayIconResPayload> = createFSA<types.SetTrayIconResPayload>(
    actionTypes.APPLICATION_SET_TRAY_ICON_RES,
    (options:types.SetTrayIconResPayload) => <any> options
);

export const setZoomLevelRes:ActionCreator<types.SetZoomLevelResPayload> = createFSA<types.SetZoomLevelResPayload>(
    actionTypes.APPLICATION_SET_ZOOM_LEVEL_RES,
    (options:types.SetZoomLevelResPayload) => <any> options
);

export const terminateRes:ActionCreator<types.TerminateResPayload> = createFSA<types.TerminateResPayload>(
    actionTypes.APPLICATION_TERMINATE_RES,
    (options:types.TerminateResPayload) => <any> options
);
