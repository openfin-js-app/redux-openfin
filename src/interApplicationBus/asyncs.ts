import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    PUBLISH_ERROR_MSG,
    SUBSCRIBE_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.InterApplicationBus.html#.publish
export async function publish(action:Action<types.PublishPayload>):Promise<Action<types.PublishResPayload>>{
    const  { topic, message }  = action.payload;
    return createAsyncFun<types.PublishPayload,types.PublishResPayload>(
        action,
        PUBLISH_ERROR_MSG,
        handlerActions.publishRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.InterApplicationBus.publish(topic, message,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}


//http://cdn.openfin.co/jsdocs/beta/fin.desktop.InterApplicationBus.html#.subscribe
export async function subscribe(action:Action<types.SubscribePayload>):Promise<Action<types.SubscribeResPayload>>{
    const  { senderUuid, name, topic, listener }  = action.payload;
    return createAsyncFun<types.SubscribePayload,types.SubscribeResPayload>(
        action,
        SUBSCRIBE_ERROR_MSG,
        handlerActions.subscribeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            fin.desktop.InterApplicationBus.subscribe(senderUuid, name, topic, listener,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb
            );
        }
    );
}
