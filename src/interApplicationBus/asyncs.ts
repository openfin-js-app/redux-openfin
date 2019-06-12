import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import wrapAsyncFun from '../utils/wrapAsyncFun'

export async function publish(action:Action<types.PublishPayload>):Promise<Action<types.PublishResPayload>>{
    const  { topic, message }  = action.payload;
    return wrapAsyncFun<types.PublishPayload,types.PublishResPayload>(
        action,
        handlerActions.publishRes,
        async (fin)=>{
            await fin.InterApplicationBus.publish(topic, message);
            return handlerActions.publishRes({});
        }
    );
}

export async function subscribe(action:Action<types.SubscribePayload>):Promise<Action<types.SubscribeResPayload>>{
    const  { source, topic, listener }  = action.payload;
    return wrapAsyncFun<types.SubscribePayload,types.SubscribeResPayload>(
        action,
        handlerActions.subscribeRes,
        async (fin)=>{
            await fin.InterApplicationBus.subscribe(source, topic, listener);
            return handlerActions.subscribeRes({});
        }
    );
}
