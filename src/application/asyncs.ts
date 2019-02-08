import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    NEW_APPLICAITON_ERROR_MSG,
    RESTART_ERROR_MSG,
    CLOSE_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#Application
export async function newApplication(action:Action<types.NewApplicationPayload>):Promise<Action<types.NewApplicationResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.NewApplicationPayload,types.NewApplicationResPayload>(
        action,
        NEW_APPLICAITON_ERROR_MSG,
        handlerActions.newApplicationRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let app = new fin.desktop.Application(options,
                (app:any)=>{
                    const responseAction = resActionCreator({app});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#.getCurrent

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getWindow

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#.wrap

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#addEventListener

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#close
export async function close(action:Action<types.ClosePayload>):Promise<Action<types.CloseResPayload>>{
    const { force } = action.payload;
    return createAsyncFun<types.ClosePayload,types.CloseResPayload>(
        action,
        CLOSE_ERROR_MSG,
        handlerActions.closeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let application = fin.desktop.Application.getCurrent();
            application.close(force,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getChildWindows

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getInfo

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getShortcuts

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getTrayIconInfo

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getZoomLevel

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#isRunning

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#removeEventListener

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#restart
export async function restart(action:Action<types.RestartPayload>):Promise<Action<types.RestartResPayload>>{
    return createAsyncFun<types.RestartPayload,types.NewApplicationResPayload>(
        action,
        RESTART_ERROR_MSG,
        handlerActions.restartRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let application = fin.desktop.Application.getCurrent();
            application.restart(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#run

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#scheduleRestart

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setShortcuts

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setTrayIcon

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#setZoomLevel

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#terminate
