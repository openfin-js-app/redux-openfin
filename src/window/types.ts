import { WindowOptions } from '../GlobalTypes';
import { BaseRequestPayload, BaseResponsePayload } from '../base/BasePayload';

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