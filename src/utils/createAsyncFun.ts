import {Action} from 'redux-actions';

import { initState } from '../init';
import {FIN_NOT_INJECTED_MSG} from "../GlobalTypes";

export default function createAsyncFun<RequestPayloadType,ResponsePayloadType,>(
        action:Action<RequestPayloadType>,
        ERROR_MSG:string,
        resActionCreator:(options:ResponsePayloadType)=>Action<ResponsePayloadType>,
        finCb:(
            fin:any,action:Action<RequestPayloadType>,
            resActionCreator:(options:ResponsePayloadType)=>Action<ResponsePayloadType>,
            succCb:(action:Action<ResponsePayloadType>)=>void,
            errCb:(e:Error)=>void
        )=>void
):Promise<Action<ResponsePayloadType>> {
    return new Promise<Action<ResponsePayloadType>>((resolve,reject)=>{

        const succCb = (action:Action<ResponsePayloadType>)=>{
            if (initState.store){
                initState.store.dispatch(action);
                resolve(action);
            }
        };
        const errCb = (e:Error)=>{
            const errMsg = e && e.message
                ? e.message
                : ERROR_MSG;
            const error = new Error(errMsg);
            const rejectAction = resActionCreator({
                name:'Error',
                error
            } as any);
            if (initState.store){
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