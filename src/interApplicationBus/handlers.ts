import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.InterApplicationBus.html#.publish
export const publishHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.publish(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.InterApplicationBus.html#.subscribe
export const subscribeHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.subscribe(action).catch(e =>{
        // eat the exception
    });
};
