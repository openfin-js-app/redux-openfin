import {
    ISetShortCutsConfig,ITrayIconHoverEvent,
    WindowOptions, FinApplication, FinWindow
} from '../GlobalTypes';
import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

export interface StartApplicationPayload extends BaseRequestPayload{
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

export interface StartApplicationResPayload extends BaseResponsePayload{
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

export interface AddListenerPayload extends BaseRequestPayload{
    type:string,
    listener:(...args:any[])=>void,
    options?:any,
}

export interface AddListenerResPayload extends BaseResponsePayload{
}

export interface QuitPayload extends BaseResponsePayload{
    force:boolean;
}

export interface QuitResPayload extends BaseResponsePayload{

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

export interface RemoveListenerPayload extends BaseRequestPayload{
    type:string,
    listener:(...args:any[])=>void,
    options?:any,
}
export interface RemoveListenerResPayload extends BaseResponsePayload{
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
