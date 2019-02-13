import {
    ISetShortCutsConfig,ITrayIconHoverEvent,
    SetTrayIconListener,
    WindowOptions, FinApplication, FinWindow
} from '../GlobalTypes';
import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export const NEW_APPLICAITON_ERROR_MSG = 'OpenFin API call Application.constructor failed.';
export const APPLICATION_GET_CURRENT_ERROR_MSG = 'OpenFin API call Application.getCurrent() failed.';
export const APPLICATION_GET_WINDOW_ERROR_MSG = 'OpenFin API call Application.getWindow() failed.';
export const APPLICATION_WRAP_ERROR_MSG = 'OpenFin API call Application.wrap() failed.';
export const APPLICATION_ADD_EVENT_LISTENER_ERROR_MSG = 'OpenFin API call Application.addEventListener() failed.';
export const CLOSE_ERROR_MSG = 'OpenFin API call Application.close() failed.';
export const APPLICATION_GET_CHILD_WINDOWS_ERROR_MSG = 'OpenFin API call Application.getChildWindows() failed.';
export const APPLICATION_GET_INFO_ERROR_MSG = 'OpenFin API call Application.getInfo() failed.';
export const APPLICATION_GET_SHORTCUTS_ERROR_MSG = 'OpenFin API call Application.getShortcuts() failed.';
export const APPLICATION_GET_TRAY_ICON_INFO_ERROR_MSG = 'OpenFin API call Application.getTrayIconInfo() failed.';
export const APPLICATION_GET_ZOOM_LEVEL_ERROR_MSG = 'OpenFin API call Application.getZoomLevel() failed.';
export const APPLICATION_IS_RUNNING_ERROR_MSG = 'OpenFin API call Application.isRunning() failed.';
export const APPLICATION_REMOVE_EVENT_LISTENER_ERROR_MSG = 'OpenFin API call Application.removeEventListener() failed.';
export const RESTART_ERROR_MSG = 'OpenFin API call Application.restart() failed.';
export const APPLICATION_SCHEDULE_RESTART_ERROR_MSG = 'OpenFin API call Application.scheduleRestart() failed.';
export const APPLICATION_SET_SHORTCUTS_ERROR_MSG = 'OpenFin API call Application.setShortcuts() failed.';
export const APPLICATION_SET_TRAY_ICON_ERROR_MSG = 'OpenFin API call Application.setTrayIcon() failed.';
export const APPLICATION_SET_ZOOM_LEVEL_ERROR_MSG = 'OpenFin API call Application.setZoomLevel() failed.';
export const APPLICATION_TERMINATE_ERROR_MSG = 'OpenFin API call Application.terminate() failed.';

export interface NewApplicationPayload extends BaseRequestPayload{
    uuid:string;
    name:string;
    url?:string;
    disableIabSecureLogging?:boolean;
    loadErrorMessage?:string;
    mainWindowOptions:Partial<WindowOptions>;
    nonPersistent?:boolean;
    plugins?:boolean;
    webSecurity?:boolean;
}

export interface NewApplicationResPayload extends BaseResponsePayload{
    app?:FinApplication,
}

export interface GetCurrentPayload extends BaseRequestPayload{

}
export interface GetCurrentResPayload extends BaseResponsePayload{
    application?:FinApplication,
}

export interface GetWindowPayload extends BaseRequestPayload{

}
export interface GetWindowResPayload extends BaseResponsePayload{
    mainWindow?:FinWindow,
}

export interface WrapPayload extends BaseRequestPayload{
    uuid:string,
}
export interface WrapResPayload extends BaseResponsePayload{
    application?:FinApplication,
}

export interface AddEventListenerPayload extends BaseRequestPayload{
    type:string,
    listener:(...args:any[])=>void,
}

export interface AddEventListenerResPayload extends BaseResponsePayload{
}

export interface ClosePayload extends BaseResponsePayload{
    force:boolean;
}

export interface CloseResPayload extends BaseResponsePayload{

}

export interface GetChildWindowsPayload extends BaseRequestPayload{
}
export interface GetChildWindowsResPayload extends BaseResponsePayload{
    children?:FinWindow[],
}

export interface GetInfoPayload extends BaseRequestPayload{
}
export interface GetInfoResPayload extends BaseResponsePayload{
    info?:any
}

export interface GetShortcutsPayload extends BaseRequestPayload{
}
export interface GetShortcutsResPayload extends BaseResponsePayload{
    config?:ISetShortCutsConfig
}

export interface GetTrayIconInfoPayload extends BaseRequestPayload{
}
export interface GetTrayIconInfoResPayload extends BaseResponsePayload{
    trayInfo?:ITrayIconHoverEvent
}

export interface GetZoomLevelPayload extends BaseRequestPayload{
}
export interface GetZoomLevelResPayload extends BaseResponsePayload{
    level?:number,
}

export interface IsRunningPayload extends BaseRequestPayload{
}
export interface IsRunningResPayload extends BaseResponsePayload{
    running?:boolean,
}

export interface RemoveEventListenerPayload extends BaseRequestPayload{
    type:string,
    listener:(...args:any[])=>void,
}
export interface RemoveEventListenerResPayload extends BaseResponsePayload{
}

export interface RestartPayload extends BaseRequestPayload{
}

export interface RestartResPayload extends BaseResponsePayload{
}

export interface ScheduleRestartPayload extends BaseRequestPayload{
}

export interface ScheduleRestartResPayload extends BaseResponsePayload{
}

export interface SetShortcutsPayload extends BaseRequestPayload{
    config:ISetShortCutsConfig,
}
export interface SetShortcutsResPayload extends BaseResponsePayload{
}

export interface SetTrayIconPayload extends BaseRequestPayload{
    iconUrl:string,
    listeners:SetTrayIconListener,
}
export interface SetTrayIconResPayload extends BaseResponsePayload{
}

export interface SetZoomLevelPayload extends BaseRequestPayload{
    level:number,
}
export interface SetZoomLevelResPayload extends BaseResponsePayload{
}

export interface TerminatePayload extends BaseRequestPayload{
}
export interface TerminateResPayload extends BaseResponsePayload{
}
