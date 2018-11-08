import {Action} from 'redux-actions';
import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import createAsyncFun from '../utils/createAsyncFun'

import {
    ADD_EVENT_LISTENER_ERROR_MSG,
    NEW_WINDOW_ERROR_MSG,
    CLOSE_ERROR_MSG,
    DISABLE_FRAME_ERROR_MSG,
    ENABLE_FRAME_ERROR_MSG,
    FOCUS_ERROR_MSG,
    GET_GROUP_ERROR_MSG,
    GET_BOUNDS_ERROR_MSG,
    GET_STATE_ERROR_MSG,
    GET_OPTIONS_ERROR_MSG,
    HIDE_ERROR_MSG,
    JOIN_GROUP_ERROR_MSG,
    LEAVE_GROUP_ERROR_MSG,
    MAXIMIZE_ERROR_MSG,
    MINIMIZE_ERROR_MSG,
    MOVE_BY_ERROR_MSG,
    MOVE_TO_ERROR_MSG,
    RETORE_ERROR_MSG,
    SHOW_ERROR_MSG,
    SET_AS_FOREGROUND_ERROR_MSG,
    SET_BOUNDS_ERROR_MSG,
    UPDATE_OPTIONS_ERROR_MSG,
} from './types';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#addEventListener
export async function addEventListener(action:Action<types.AddEventListenerPayload>):Promise<Action<types.AddEventListenerResPayload>>{
    const  { type, listener }  = action.payload;
    return createAsyncFun<types.AddEventListenerPayload,types.AddEventListenerResPayload>(
        action,
        ADD_EVENT_LISTENER_ERROR_MSG,
        handlerActions.addEventListenerRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let window = new fin.desktop.addEventListener(type, listener,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#Window
export async function newWindow(action:Action<types.NewWindowPayload>):Promise<Action<types.NewWindowResPayload>>{
    const  options  = action.payload;
    return createAsyncFun<types.NewWindowPayload,types.NewWindowResPayload>(
        action,
        NEW_WINDOW_ERROR_MSG,
        handlerActions.newWindowRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let window = new fin.desktop.Window(options,
                ()=>{
                    const responseAction = resActionCreator({window});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#close
export async function close(action:Action<types.ClosePayload>):Promise<Action<types.CloseResPayload>>{
    const { force } = action.payload;
    return createAsyncFun<types.ClosePayload,types.CloseResPayload>(
        action,
        CLOSE_ERROR_MSG,
        handlerActions.closeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.close(force,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.disableFrame.html
export async function disableFrame(action:Action<types.DisableFramePayload>):Promise<Action<types.DisableFrameResPayload>>{
    return createAsyncFun<types.DisableFramePayload,types.DisableFrameResPayload>(
        action,
        DISABLE_FRAME_ERROR_MSG,
        handlerActions.disableFrameRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.disableFrame(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    )
    
}

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.enableFrame.html
export async function enableFrame(action:Action<types.EnableFramePayload>):Promise<Action<types.EnableFrameResPayload>>{
    return createAsyncFun<types.EnableFramePayload,types.EnableFrameResPayload>(
        action,
        ENABLE_FRAME_ERROR_MSG,
        handlerActions.enableFrameRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.enableFrame(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    )
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#focus
export async function focus(action:Action<types.FocusPayload>):Promise<Action<types.FocusResPayload>>{
    return createAsyncFun<types.FocusPayload,types.FocusResPayload>(
        action,
        FOCUS_ERROR_MSG,
        handlerActions.focusRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.focus(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getGroup
export async function getGroup(action:Action<types.GetGroupPayload>):Promise<Action<types.GetGroupResPayload>>{
    return createAsyncFun<types.GetGroupPayload,types.GetGroupResPayload>(
        action,
        GET_GROUP_ERROR_MSG,
        handlerActions.getGroupRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.getGroup(
                (windows)=>{
                    const responseAction = resActionCreator({windows});
                    succCb(responseAction);
                },errCb);
        }
    );
}


//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getBounds
export async function getBounds(action:Action<types.GetBoundsPayload>):Promise<Action<types.GetBoundsResPayload>>{
    return createAsyncFun<types.GetBoundsPayload,types.GetBoundsResPayload>(
        action,
        GET_BOUNDS_ERROR_MSG,
        handlerActions.getBoundsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.getBounds(
                (payload)=>{
                    const responseAction = resActionCreator(payload);
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getState
export async function getState(action:Action<types.GetStatePayload>):Promise<Action<types.GetStateResPayload>>{
    return createAsyncFun<types.GetStatePayload,types.GetStateResPayload>(
        action,
        GET_STATE_ERROR_MSG,
        handlerActions.getStateRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.getState(
                (state:string)=>{
                    const responseAction = resActionCreator({state});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getOptions
export async function getOptions(action:Action<types.GetOptionsPayload>):Promise<Action<types.GetOptionsResPayload>>{
    return createAsyncFun<types.GetOptionsPayload,types.GetOptionsResPayload>(
        action,
        GET_OPTIONS_ERROR_MSG,
        handlerActions.getOptionsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.getOptions(
                (options)=>{
                    const responseAction = resActionCreator(options);
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#hide
export async function hide(action:Action<types.HidePayload>):Promise<Action<types.HideResPayload>>{
    return createAsyncFun<types.HidePayload,types.HideResPayload>(
        action,
        HIDE_ERROR_MSG,
        handlerActions.hideRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.hide(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#joinGroup
export async function joinGroup(action:Action<types.JoinGroupPayload>):Promise<Action<types.JoinGroupResPayload>> {
    const { secondWindow } = action.payload;
    return createAsyncFun<types.JoinGroupPayload,types.JoinGroupResPayload>(
        action,
        JOIN_GROUP_ERROR_MSG,
        handlerActions.joinGroupRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            secondWindow.joinGroup(currentWindow,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#leaveGroup
export async function leaveGroup(action:Action<types.LeaveGroupPayload>):Promise<Action<types.LeaveGroupResPayload>> {
    const { secondWindow } = action.payload;
    return createAsyncFun<types.LeaveGroupPayload,types.LeaveGroupResPayload>(
        action,
        LEAVE_GROUP_ERROR_MSG,
        handlerActions.leaveGroupRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            secondWindow.leaveGroup(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#maximize
export async function maximize(action:Action<types.MaximizePayload>):Promise<Action<types.MaximizeResPayload>>{
    return createAsyncFun<types.MaximizePayload,types.MaximizeResPayload>(
        action,
        MAXIMIZE_ERROR_MSG,
        handlerActions.maximizeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.maximize(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#minimize
export async function minimize(action:Action<types.MinimizePayload>):Promise<Action<types.MinimizeResPayload>>{
    return createAsyncFun<types.MinimizePayload,types.MinimizeResPayload>(
        action,
        MINIMIZE_ERROR_MSG,
        handlerActions.minimizeRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.minimize(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveBy
export async function moveBy(action:Action<types.MoveByPayload>):Promise<Action<types.MoveByResPayload>>{
    const { deltaLeft, deltaTop } = action.payload;
    return createAsyncFun<types.MoveByPayload,types.MoveByResPayload>(
        action,
        MOVE_BY_ERROR_MSG,
        handlerActions.moveByRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.moveBy(deltaLeft, deltaTop,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveTo
export async function moveTo(action:Action<types.MoveToPayload>):Promise<Action<types.MoveToResPayload>>{
    const { left, top } = action.payload;
    return createAsyncFun<types.MoveToPayload,types.MoveToResPayload>(
        action,
        MOVE_TO_ERROR_MSG,
        handlerActions.moveToRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.moveTo(left, top,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#restore
export async function restore(action:Action<types.RestorePayload>):Promise<Action<types.RestoreResPayload>>{
    return createAsyncFun<types.RestorePayload,types.RestoreResPayload>(
        action,
        RETORE_ERROR_MSG,
        handlerActions.restoreRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.restore(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#show
export async function show(action:Action<types.ShowPayload>):Promise<Action<types.ShowResPayload>>{
    return createAsyncFun<types.ShowPayload,types.ShowResPayload>(
        action,
        SHOW_ERROR_MSG,
        handlerActions.showRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.show(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setAsForeground
export async function setAsForeground(action:Action<types.SetAsForegroundPayload>):Promise<Action<types.SetAsForegroundResPayload>>{
    return createAsyncFun<types.SetAsForegroundPayload,types.SetAsForegroundResPayload>(
        action,
        SET_AS_FOREGROUND_ERROR_MSG,
        handlerActions.setAsForegroundRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.setAsForeground(
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setBounds
export async function setBounds(action:Action<types.SetBoundsPayload>):Promise<Action<types.SetBoundsResPayload>>{
    const {
        top, left, height, width,
    } = action.payload;
    return createAsyncFun<types.SetBoundsPayload,types.SetBoundsResPayload>(
        action,
        SET_BOUNDS_ERROR_MSG,
        handlerActions.setBoundsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.setBounds( left, top, width, height,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#updateOptions
export async function updateOptions(action:Action<types.UpdateOptionsPayload>):Promise<Action<types.UpdateOptionsResPayload>>{
    const {
        options,
    } = action.payload;
    return createAsyncFun<types.UpdateOptionsPayload,types.UpdateOptionsResPayload>(
        action,
        UPDATE_OPTIONS_ERROR_MSG,
        handlerActions.updateOptionsRes,
        (fin,action,resActionCreator,succCb,errCb)=>{
            let currentWindow = fin.desktop.Window.getCurrent();
            currentWindow.updateOptions( options,
                ()=>{
                    const responseAction = resActionCreator({});
                    succCb(responseAction);
                },errCb);
        }
    );
}