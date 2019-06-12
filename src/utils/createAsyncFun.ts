import {Action} from 'redux-actions';

import { initState } from '../init';
import {FIN_NOT_INJECTED_MSG, LIB_REDUX_DISPATCH_FIELD_NAME } from "../GlobalTypes";

declare const window:any;

/**
 * async wrapper creator for api v1
 *
 * @deprecated
 * switch to use wrapAsyncFun instead
 *
 * @param action
 * @param ERROR_MSG
 * @param resActionCreator
 * @param finCb
 */
export default function createAsyncFun<RequestPayloadType,ResponsePayloadType,>(
        action:Action<RequestPayloadType>,
        ERROR_MSG:string,
        resActionCreator:(options:ResponsePayloadType)=>Action<ResponsePayloadType>,
        finCb:(
            fin:any,
            action:Action<RequestPayloadType>,
            resActionCreator:(options:ResponsePayloadType)=>Action<ResponsePayloadType>,
            succCb:(action:Action<ResponsePayloadType>)=>void,
            errCb:(e:Error|string)=>void
        )=>void
):Promise<Action<ResponsePayloadType>> {

    const libReduxDispatch =
        (action[LIB_REDUX_DISPATCH_FIELD_NAME] && window[action[LIB_REDUX_DISPATCH_FIELD_NAME]])?
            window[action[LIB_REDUX_DISPATCH_FIELD_NAME]]:
            void 0;

    return new Promise<Action<ResponsePayloadType>>((resolve,reject)=>{

        const succCb = (action:Action<ResponsePayloadType>)=>{
            if (libReduxDispatch){
                libReduxDispatch(action)
            }else if (initState.store){
                initState.store.dispatch(action);
            }
            resolve(action);;
        };
        const errCb = (e:Error|string)=>{
            const errMsg:string = e && (e as Error).message
                ? (e as Error).message
                : e?e as string:ERROR_MSG;
            const error = new Error(errMsg);
            const rejectAction = resActionCreator({
                name:'Error',
                error
            } as any);
            if (libReduxDispatch){
                libReduxDispatch(action)
            }else if (initState.store){
                initState.store.dispatch(rejectAction);
            }
            reject(rejectAction.error)
        };

        if (initState.fin){
            finCb(initState.fin,action,resActionCreator,succCb,errCb);
        }else{
            if (initState.store){
                const rejectAction = resActionCreator({
                    name:'Error',
                    error:new Error(FIN_NOT_INJECTED_MSG),
                } as any );
                initState.store.dispatch(rejectAction);
                reject(rejectAction.error)
            }else{
                reject(new Error(FIN_NOT_INJECTED_MSG))
            }
        }

    });

}