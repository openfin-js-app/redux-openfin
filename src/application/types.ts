import {WindowOptions} from '../GlobalTypes';
import {BaseRequestPayload, BaseResponsePayload} from '../base/BasePayload';

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
    app?:any;
}

export interface RestartPayload extends BaseRequestPayload{
}

export interface RestartResPayload extends BaseResponsePayload{
}

export interface ClosePayload extends BaseResponsePayload{
    force:boolean;
}

export interface CloseResPayload extends BaseResponsePayload{

}