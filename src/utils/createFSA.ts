import {createAction, Action} from 'redux-actions';

import { LIB_REDUX_DISPATCH_FIELD_NAME } from '../GlobalTypes'

interface IExtAction {
    [LIB_REDUX_DISPATCH_FIELD_NAME]:string,
}

export type ActionCreator<T> = ((options:T, extAction?:IExtAction)=> Action<T>)

export default function createFSA<T>(type:string, payloadCreator:(payload:T)=>T):ActionCreator<T> {

    const actionCreator = createAction<T,T>(type,payloadCreator);

    return (payload:T, extAction?:IExtAction) => {

        let oriAction:Action<T> = actionCreator(payload);

        oriAction.payload = oriAction.payload?oriAction.payload:{} as T;

        if (extAction){
            return <Action<T>> {
                ...oriAction,
                ...extAction,
                // @ts-ignore
                error:payload.error && payload.name,
            }
        }else{
            return <Action<T>> {
                ...oriAction,
                // @ts-ignore
                error:payload.error && payload.name,
            }
        }

    }

}