import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const newApplication:ActionCreator<types.NewApplicationPayload> = createFSA<types.NewApplicationPayload>(
    actionTypes.NEW_APPLICATION,
    (options:types.NewApplicationPayload) => <any> options
);

export const getCurrent:ActionCreator<types.GetCurrentPayload> = createFSA<types.GetCurrentPayload>(
    actionTypes.APPLICATION_GET_CURRENT,
    (options:types.GetCurrentPayload) => <any> options
);

export const getWindow:ActionCreator<types.GetWindowPayload> = createFSA<types.GetWindowPayload>(
    actionTypes.APPLICATION_GET_WINDOW,
    (options:types.GetWindowPayload) => <any> options
);

export const wrap:ActionCreator<types.WrapPayload> = createFSA<types.WrapPayload>(
    actionTypes.APPLICATION_WRAP,
    (options:types.WrapPayload) => <any> options
);

export const addEventListener:ActionCreator<types.AddEventListenerPayload> = createFSA<types.AddEventListenerPayload>(
    actionTypes.APPLICATION_ADD_EVENT_LISTENER,
    (options:types.AddEventListenerPayload) => <any> options
);

export const close:ActionCreator<types.ClosePayload> = createFSA<types.ClosePayload>(
    actionTypes.CLOSE,
    (options:types.ClosePayload) => <any> options
);

export const getChildWindows:ActionCreator<types.GetChildWindowsPayload> = createFSA<types.GetChildWindowsPayload>(
    actionTypes.APPLICATION_GET_CHILD_WINDOWS,
    (options:types.GetChildWindowsPayload) => <any> options
);

export const getInfo:ActionCreator<types.GetInfoPayload> = createFSA<types.GetInfoPayload>(
    actionTypes.APPLICATION_GET_INFO,
    (options:types.GetInfoPayload) => <any> options
);

export const getShortcuts:ActionCreator<types.GetShortcutsPayload> = createFSA<types.GetShortcutsPayload>(
    actionTypes.APPLICATION_GET_SHORTCUTS,
    (options:types.GetShortcutsPayload) => <any> options
);

export const getTrayIconInfo:ActionCreator<types.GetTrayIconInfoPayload> = createFSA<types.GetTrayIconInfoPayload>(
    actionTypes.APPLICATION_GET_TRAY_ICON_INFO,
    (options:types.GetTrayIconInfoPayload) => <any> options
);

export const getZoomLevel:ActionCreator<types.GetZoomLevelPayload> = createFSA<types.GetZoomLevelPayload>(
    actionTypes.APPLICATION_GET_ZOOM_LEVEL,
    (options:types.GetZoomLevelPayload) => <any> options
);

export const isRunning:ActionCreator<types.IsRunningPayload> = createFSA<types.IsRunningPayload>(
    actionTypes.APPLICATION_IS_RUNNING,
    (options:types.IsRunningPayload) => <any> options
);

export const removeEventListener:ActionCreator<types.RemoveEventListenerPayload> = createFSA<types.RemoveEventListenerPayload>(
    actionTypes.APPLICATION_REMOVE_EVENT_LISTENER,
    (options:types.RemoveEventListenerPayload) => <any> options
);

export const restart:ActionCreator<types.RestartPayload> = createFSA<types.RestartPayload>(
    actionTypes.RESTART,
    (options:types.RestartPayload) => <any> options
);

export const scheduleRestart:ActionCreator<types.ScheduleRestartPayload> = createFSA<types.ScheduleRestartPayload>(
    actionTypes.APPLICATION_SCHEDULE_RESTART,
    (options:types.ScheduleRestartPayload) => <any> options
);


export const setShortcuts:ActionCreator<types.SetShortcutsPayload> = createFSA<types.SetShortcutsPayload>(
    actionTypes.APPLICATION_SET_SHORTCUTS,
    (options:types.SetShortcutsPayload) => <any> options
);

export const setTrayIcon:ActionCreator<types.SetTrayIconPayload> = createFSA<types.SetTrayIconPayload>(
    actionTypes.APPLICATION_SET_TRAY_ICON,
    (options:types.SetTrayIconPayload) => <any> options
);

export const setZoomLevel:ActionCreator<types.SetZoomLevelPayload> = createFSA<types.SetZoomLevelPayload>(
    actionTypes.APPLICATION_SET_ZOOM_LEVEL,
    (options:types.SetZoomLevelPayload) => <any> options
);

export const terminate:ActionCreator<types.TerminatePayload> = createFSA<types.TerminatePayload>(
    actionTypes.APPLICATION_TERMINATE,
    (options:types.TerminatePayload) => <any> options
);