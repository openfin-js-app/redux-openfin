import {Action} from 'redux-actions';

import { initState } from '../init';
import { FIN_NOT_INJECTED_MSG, LIB_REDUX_DISPATCH_FIELD_NAME } from "../GlobalTypes";

declare const window:any;

/**
 * async wrapper for api v2
 *
 *
 * @param action
 * @param resActionCreator
 * @param finCb
 */
export default async function wrapAsyncFun<RequestPayloadType,ResponsePayloadType>(
    action:Action<RequestPayloadType>,
    resActionCreator:(options:ResponsePayloadType)=>Action<ResponsePayloadType>,
    finCb: (
        fin:any
    )=>Promise<Action<ResponsePayloadType>>
):Promise<Action<ResponsePayloadType>>{

    const libReduxDispatch =
        (action[LIB_REDUX_DISPATCH_FIELD_NAME] && window[action[LIB_REDUX_DISPATCH_FIELD_NAME]])?
            window[action[LIB_REDUX_DISPATCH_FIELD_NAME]]:
            void 0;

    if (initState.fin){
        try{
            const successRes:Action<ResponsePayloadType> = await finCb(
                initState.fin
            );

            if (libReduxDispatch){
                libReduxDispatch(successRes)
            }else if (initState.store){
                initState.store.dispatch(successRes);
            }
            return successRes;
        }catch (error) {
            if (initState.store){
                const rejectAction = resActionCreator({
                    name:'Error',
                    error,
                } as any );
                if (libReduxDispatch){
                    libReduxDispatch(action)
                }else if (initState.store){
                    initState.store.dispatch(rejectAction);
                }
            };
            throw error;
        }
    }else{
        if (initState.store){
            const rejectAction = resActionCreator({
                name:'Error',
                error:new Error(FIN_NOT_INJECTED_MSG),
            } as any );
            initState.store.dispatch(rejectAction);
            throw rejectAction.error;
        }else{
            throw FIN_NOT_INJECTED_MSG;
        }
    }
}
