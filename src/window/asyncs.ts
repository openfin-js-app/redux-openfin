import {Action} from 'redux-actions';

import { initState } from '../init';
import { initState as dockingInitState } from '../docking/init';

import * as types from "./types";
import * as handlerActions from './actions/handlerActionCreator';

import wrapAsyncFun from '../utils/wrapAsyncFun'

export async function getCurrent(action:Action<types.GetCurrentPayload>):Promise<Action<types.GetCurrentResPayload>>{
    return wrapAsyncFun<types.GetCurrentPayload,types.GetCurrentResPayload>(
        action,
        handlerActions.getCurrentRes,
        async (fin)=>{
            let current;
            if (initState.currentWindow){
                current = initState.currentWindow;
            }else{
                current = fin.Window.getCurrentSync();
                initState.currentWindow = current;
            }
            return handlerActions.getCurrentRes({current});
        }
    );
}


export async function wrap(action:Action<types.WrapPayload>):Promise<Action<types.WrapResPayload>>{
    const { appUuid, windowName } = action.payload;
    return wrapAsyncFun<types.WrapPayload,types.WrapResPayload>(
        action,
        handlerActions.wrapRes,
        async (fin)=>{
            let window = await fin.Window.wrap({uuid:appUuid, name:windowName});
            return handlerActions.wrapRes({window});
        }
    );
}

export async function addListener(action:Action<types.AddListenerPayload>):Promise<Action<types.AddListenerResPayload>>{
    const  { type, listener, options }  = action.payload;
    return wrapAsyncFun<types.AddListenerPayload,types.AddListenerResPayload>(
        action,
        handlerActions.addListenerRes,
        async (fin)=>{
            await initState.currentWindow.addListener(type, listener, options);
            return handlerActions.addListenerRes({});
        }
    );
}

export async function authenticate(action:Action<types.AuthenticatePayload>):Promise<Action<types.AuthenticateResPayload>>{
    const  { userName, password }  = action.payload;
    return wrapAsyncFun<types.AuthenticatePayload,types.AuthenticateResPayload>(
        action,
        handlerActions.authenticateRes,
        async (fin)=>{
            await initState.currentWindow.authenticate(userName,password);
            return handlerActions.authenticateRes({});
        }
    );
}

export async function bringToFront(action:Action<types.BringToFrontPayload>):Promise<Action<types.BringToFrontResPayload>>{
    return wrapAsyncFun<types.BringToFrontPayload,types.BringToFrontResPayload>(
        action,
        handlerActions.bringToFrontRes,
        async (fin)=>{
            await initState.currentWindow.bringToFront();
            return handlerActions.bringToFrontRes({});
        }
    );
}

export async function createWindow(action:Action<types.CreateWindowPayload>):Promise<Action<types.CreateWindowResPayload>>{
    const  options  = action.payload;
    return wrapAsyncFun<types.CreateWindowPayload,types.CreateWindowResPayload>(
        action,
        handlerActions.createWindowRes,
        async (fin)=>{
            let window = await fin.Window.create(options);
            if (dockingInitState.dockingManager){
                dockingInitState.dockingManager.register(window);
            }
            return handlerActions.createWindowRes({window});
        }
    );
}

export async function close(action:Action<types.ClosePayload>):Promise<Action<types.CloseResPayload>>{
    const { force } = action.payload;
    return wrapAsyncFun<types.ClosePayload,types.CloseResPayload>(
        action,
        handlerActions.closeRes,
        async (fin)=>{
            await initState.currentWindow.close(force);
            return handlerActions.closeRes({});
        }
    );
}


export async function disableUserMovement(action:Action<types.DisableUserMovementPayload>):Promise<Action<types.DisableUserMovementResPayload>>{
    return wrapAsyncFun<types.DisableUserMovementPayload,types.DisableUserMovementResPayload>(
        action,
        handlerActions.disableFrameRes,
        async (fin)=>{
            await initState.currentWindow.disableUserMovement();
            return handlerActions.disableFrameRes({});
        }
    )
    
}

export async function enableUserMovement(action:Action<types.EnableUserMovementPayload>):Promise<Action<types.EnableUserMovementResPayload>>{
    return wrapAsyncFun<types.EnableUserMovementPayload,types.EnableUserMovementResPayload>(
        action,
        handlerActions.enableFrameRes,
        async (fin)=>{
            await initState.currentWindow.enableUserMovement();
            return handlerActions.enableFrameRes({});
        }
    )
}

export async function focus(action:Action<types.FocusPayload>):Promise<Action<types.FocusResPayload>>{
    return wrapAsyncFun<types.FocusPayload,types.FocusResPayload>(
        action,
        handlerActions.focusRes,
        async (fin)=>{
            await initState.currentWindow.focus();
            return handlerActions.focusRes({});
        }
    );
}

export async function getGroup(action:Action<types.GetGroupPayload>):Promise<Action<types.GetGroupResPayload>>{
    return wrapAsyncFun<types.GetGroupPayload,types.GetGroupResPayload>(
        action,
        handlerActions.getGroupRes,
        async (fin)=>{
            const windows = await initState.currentWindow.getGroup();
            return handlerActions.getGroupRes({windows});
        }
    );
}


export async function getBounds(action:Action<types.GetBoundsPayload>):Promise<Action<types.GetBoundsResPayload>>{
    return wrapAsyncFun<types.GetBoundsPayload,types.GetBoundsResPayload>(
        action,
        handlerActions.getBoundsRes,
        async (fin)=>{
            const payload = await initState.currentWindow.getBounds();
            return handlerActions.getBoundsRes(payload);
        }
    );
}

export async function getState(action:Action<types.GetStatePayload>):Promise<Action<types.GetStateResPayload>>{
    return wrapAsyncFun<types.GetStatePayload,types.GetStateResPayload>(
        action,
        handlerActions.getStateRes,
        async (fin)=>{
            const state = await initState.currentWindow.getState();
            return handlerActions.getStateRes({state});
        }
    );
}

export async function getOptions(action:Action<types.GetOptionsPayload>):Promise<Action<types.GetOptionsResPayload>>{
    return wrapAsyncFun<types.GetOptionsPayload,types.GetOptionsResPayload>(
        action,
        handlerActions.getOptionsRes,
        async (fin)=>{
            const options = await initState.currentWindow.getOptions();
            return handlerActions.getOptionsRes(options);
        }
    );
}

export async function hide(action:Action<types.HidePayload>):Promise<Action<types.HideResPayload>>{
    return wrapAsyncFun<types.HidePayload,types.HideResPayload>(
        action,
        handlerActions.hideRes,
        async (fin)=>{
            await initState.currentWindow.hide();
            return handlerActions.hideRes({});
        }
    );
}

export async function joinGroup(action:Action<types.JoinGroupPayload>):Promise<Action<types.JoinGroupResPayload>> {
    const { currentWindow, targetWindow } = action.payload;
    return wrapAsyncFun<types.JoinGroupPayload,types.JoinGroupResPayload>(
        action,
        handlerActions.joinGroupRes,
        async (fin)=>{
            await currentWindow.joinGroup(targetWindow);
            return handlerActions.joinGroupRes({});
        }
    );
}

export async function leaveGroup(action:Action<types.LeaveGroupPayload>):Promise<Action<types.LeaveGroupResPayload>> {
    const { targetWindow } = action.payload;
    return wrapAsyncFun<types.LeaveGroupPayload,types.LeaveGroupResPayload>(
        action,
        handlerActions.leaveGroupRes,
        async (fin)=>{
            if (targetWindow){
                await targetWindow.leaveGroup();
            }else{
                await initState.currentWindow.leaveGroup()
            }
            return handlerActions.leaveGroupRes({});
        }
    );
}

export async function maximize(action:Action<types.MaximizePayload>):Promise<Action<types.MaximizeResPayload>>{
    return wrapAsyncFun<types.MaximizePayload,types.MaximizeResPayload>(
        action,
        handlerActions.maximizeRes,
        async (fin)=>{
            await initState.currentWindow.maximize();
            return handlerActions.maximizeRes({});
        }
    );
}

export async function mergeGroups(action:Action<types.MergeGroupsPayload>):Promise<Action<types.MergeGroupsResPayload>>{
    const { currentWindow, targetWindow } = action.payload;
    return wrapAsyncFun<types.MergeGroupsPayload,types.MergeGroupsResPayload>(
        action,
        handlerActions.mergeGroupsRes,
        async (fin)=>{
            await currentWindow.mergeGroups(targetWindow);
            return handlerActions.mergeGroupsRes({});
        }
    );
}




export async function minimize(action:Action<types.MinimizePayload>):Promise<Action<types.MinimizeResPayload>>{
    return wrapAsyncFun<types.MinimizePayload,types.MinimizeResPayload>(
        action,
        handlerActions.minimizeRes,
        async (fin)=>{
            await initState.currentWindow.minimize();
            return handlerActions.minimizeRes({});
        }
    );
}

export async function moveBy(action:Action<types.MoveByPayload>):Promise<Action<types.MoveByResPayload>>{
    const { deltaLeft, deltaTop } = action.payload;
    return wrapAsyncFun<types.MoveByPayload,types.MoveByResPayload>(
        action,
        handlerActions.moveByRes,
        async (fin)=>{
            await initState.currentWindow.moveBy(deltaLeft, deltaTop);
            return handlerActions.moveByRes({});
        }
    );
}

export async function moveTo(action:Action<types.MoveToPayload>):Promise<Action<types.MoveToResPayload>>{
    const { left, top } = action.payload;
    return wrapAsyncFun<types.MoveToPayload,types.MoveToResPayload>(
        action,
        handlerActions.moveToRes,
        async (fin)=>{
            await initState.currentWindow.moveTo(left, top);
            return handlerActions.moveToRes({});
        }
    );
}

export async function restore(action:Action<types.RestorePayload>):Promise<Action<types.RestoreResPayload>>{
    return wrapAsyncFun<types.RestorePayload,types.RestoreResPayload>(
        action,
        handlerActions.restoreRes,
        async (fin)=>{
            await initState.currentWindow.restore();
            return handlerActions.restoreRes({});
        }
    );
}

export async function show(action:Action<types.ShowPayload>):Promise<Action<types.ShowResPayload>>{
    return wrapAsyncFun<types.ShowPayload,types.ShowResPayload>(
        action,
        handlerActions.showRes,
        async (fin)=>{
            await initState.currentWindow.show();
            return handlerActions.showRes({});
        }
    );
}

export async function setAsForeground(action:Action<types.SetAsForegroundPayload>):Promise<Action<types.SetAsForegroundResPayload>>{
    return wrapAsyncFun<types.SetAsForegroundPayload,types.SetAsForegroundResPayload>(
        action,
        handlerActions.setAsForegroundRes,
        async (fin)=>{
            await initState.currentWindow.setAsForeground();
            return handlerActions.setAsForegroundRes({});
        }
    );
}

export async function setBounds(action:Action<types.SetBoundsPayload>):Promise<Action<types.SetBoundsResPayload>>{
    const {
        top, left, height, width,
    } = action.payload;
    return wrapAsyncFun<types.SetBoundsPayload,types.SetBoundsResPayload>(
        action,
        handlerActions.setBoundsRes,
        async (fin)=>{
            await initState.currentWindow.setBounds( {left, top, width, height});
            return handlerActions.setBoundsRes({});
        }
    );
}

export async function updateOptions(action:Action<types.UpdateOptionsPayload>):Promise<Action<types.UpdateOptionsResPayload>>{
    const {
        options,
    } = action.payload;
    return wrapAsyncFun<types.UpdateOptionsPayload,types.UpdateOptionsResPayload>(
        action,
        handlerActions.updateOptionsRes,
        async (fin)=>{
            await initState.currentWindow.updateOptions( options);
            return handlerActions.updateOptionsRes({});
        }
    );
}