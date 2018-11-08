import { WindowOptions } from '../GlobalTypes';
import { BaseRequestPayload, BaseResponsePayload } from '../base/BasePayload';

export const ADD_EVENT_LISTENER_ERROR_MSG = 'Openfin API call Window.addEventListener() failed.';
export const NEW_WINDOW_ERROR_MSG = 'Openfin API call Window.constructor() failed.';
export const CLOSE_ERROR_MSG = 'Openfin API call Window.close() failed.';
export const DISABLE_FRAME_ERROR_MSG = 'Openfin API call Window.disableFrame() failed.';
export const FOCUS_ERROR_MSG = 'Openfin API call Window.focus() failed.';
export const GET_BOUNDS_ERROR_MSG = 'Openfin API call Window.getBounds() failed.';
export const GET_STATE_ERROR_MSG = 'Openfin API call Window.getState() failed.';
export const GET_OPTIONS_ERROR_MSG = 'Openfin API call Window.getOptions() failed.';
export const HIDE_ERROR_MSG = 'Openfin API call Window.hide() failed.';
export const MAXIMIZE_ERROR_MSG = 'Openfin API call Window.maximize() failed.';
export const MINIMIZE_ERROR_MSG = 'Openfin API call Window.minimize() failed.';
export const MOVE_BY_ERROR_MSG = 'Openfin API call Window.moveBy() failed.';
export const MOVE_TO_ERROR_MSG = 'Openfin API call Window.moveTo() failed.';
export const RETORE_ERROR_MSG = 'Openfin API call Window.restore() failed.';
export const SHOW_ERROR_MSG = 'Openfin API call Window.show() failed.';
export const SET_AS_FOREGROUND_ERROR_MSG = 'Openfin API call Window.setForeground() failed.';
export const SET_BOUNDS_ERROR_MSG = 'Openfin API call Window.setBounds() failed.';
export const UPDATE_OPTIONS_ERROR_MSG = 'Openfin API call Window.updateOptions() failed.';

export interface AddEventListenerPayload extends BaseRequestPayload, Partial<WindowOptions>{
    type:string,
    listener: Function,
}
export interface AddEventListenerResPayload extends BaseResponsePayload{
}

export interface NewWindowPayload extends BaseRequestPayload, Partial<WindowOptions>{

}
export interface NewWindowResPayload extends BaseResponsePayload{
    window?:any;
}

export interface ClosePayload extends BaseRequestPayload {
    force:boolean;
}
export interface CloseResPayload extends BaseResponsePayload{

}

export interface DisableFramePayload extends BaseRequestPayload {
}
export interface DisableFrameResPayload extends BaseResponsePayload{
}

export interface FocusPayload extends BaseRequestPayload{

}
export interface FocusResPayload extends BaseResponsePayload {

}

export interface GetBoundsPayload extends BaseRequestPayload {

}
export interface GetBoundsResPayload extends BaseResponsePayload {
    top?:number,
    left?:number,
    height?:number,
    width?:number,
    right?:number,
    bottom?:number,
}

export interface GetStatePayload extends BaseRequestPayload{

}
export interface GetStateResPayload extends BaseResponsePayload {
    state?:string
}

export interface GetOptionsPayload extends BaseRequestPayload{

}
export interface GetOptionsResPayload extends BaseResponsePayload{
    options?:WindowOptions
}

export interface HidePayload extends BaseRequestPayload{

}
export interface HideResPayload extends BaseResponsePayload{

}

export interface MinimizePayload extends BaseRequestPayload{

}
export interface MinimizeResPayload extends BaseResponsePayload{

}

export interface MaximizePayload extends BaseRequestPayload{

}
export interface MaximizeResPayload extends BaseResponsePayload{

}

export interface MoveByPayload extends BaseRequestPayload{
    deltaLeft:number;
    deltaTop:number;
}
export interface MoveByResPayload extends BaseResponsePayload{

}

export interface MoveToPayload extends BaseRequestPayload{
    left:number;
    top:number;
}
export interface MoveToResPayload extends BaseResponsePayload{

}

export interface RestorePayload extends BaseRequestPayload{

}
export interface RestoreResPayload extends BaseResponsePayload{

}

export interface ShowPayload extends BaseRequestPayload{
    force:boolean;
}
export interface ShowResPayload extends BaseResponsePayload{

}

export interface SetAsForegroundPayload extends BaseRequestPayload{

}
export interface SetAsForegroundResPayload extends BaseResponsePayload{

}

export interface SetBoundsPayload extends BaseRequestPayload{
    top:number;
    left:number;
    height:number;
    width:number;
}
export interface SetBoundsResPayload extends BaseResponsePayload{

}

export interface UpdateOptionsPayload extends BaseRequestPayload{
    options:Partial<WindowOptions>
}
export interface UpdateOptionsResPayload extends BaseResponsePayload{

}