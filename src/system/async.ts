import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';
import {FIN_NOT_INJECTED_MSG} from '../GlobalTypes';

import { initState } from '../init';

import {
    GET_DEVICE_ID_ERROR_MSG,
    GET_DEVICE_USER_ID_ERROR_MSG,
    GET_MONITOR_INFO_ERROR_MSG,
    GET_VERSION_ERROR_MSG,
    GET_HOST_SPECS_ERROR_MSG,
    GET_ENVIRONMENT_VARIABLE_ERROR_MSG,
    CLEAR_CACHE_ERROR_MSG,
} from './types';

export async function getEnvironmentVariable(action:Action<types.GetEnvironmentVariablePayload>):Promise<Action<types.GetEnvironementVariableResPaylod>>{
    return new Promise<Action<types.GetEnvironementVariableResPaylod>>((resolve,reject)=>{
        if (initState.fin){
            const { env } = action.payload;
            initState.fin.desktop.System.getEnvironmentVariable(env,
                (value:string)=>{
                    const responseAction = handlerActions.getEnvironmentVariableRes({env,value});
                    if (initState.store){
                        initState.store.dispatch(
                            responseAction
                        )
                    }
                    resolve(responseAction);
                },
                (e:Error)=>{
                    const errMsg = e && e.message
                        ? e.message
                        : GET_ENVIRONMENT_VARIABLE_ERROR_MSG;
                    const error = new Error(errMsg);
                    const rejectAction = handlerActions.getEnvironmentVariableRes({
                        name:'Error',
                        error
                    } );
                    if (initState.store){
                        initState.store.dispatch(rejectAction);
                    }
                    reject(rejectAction.error)
                }
            );
        }else{
            if (initState.store){
                const rejectAction = handlerActions.getEnvironmentVariableRes({
                    name:'Error',
                    error:new Error(FIN_NOT_INJECTED_MSG),
                } );
                initState.store.dispatch(rejectAction);
                reject(rejectAction.error)
            }else{
                reject(new Error(FIN_NOT_INJECTED_MSG))
            }
        }
    })
}