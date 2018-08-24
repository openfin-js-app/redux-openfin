import {ActionHandlerParams} from "../GlobalTypes";
import * as handlerActions from './actions/handlerActionCreator';
import * as types from './types';

const NEW_WINDOW_ERROR_MSG = 'Openfin API call Window.constructor() failed.';
const CLOSE_ERROR_MSG = 'Openfin API call Window.close() failed.';
const FOCUS_ERROR_MSG = 'Openfin API call Window.focus() failed.';
const GET_BOUNDS_ERROR_MSG = 'Openfin API call Window.getBounds() failed.';
const GET_STATE_ERROR_MSG = 'Openfin API call Window.getState() failed.';
const GET_OPTIONS_ERROR_MSG = 'Openfin API call Window.getOptions() failed.';
const HIDE_ERROR_MSG = 'Openfin API call Window.hide() failed.';
const MAXIMIZE_ERROR_MSG = 'Openfin API call Window.maximize() failed.';
const MINIMIZE_ERROR_MSG = 'Openfin API call Window.minimize() failed.';
const MOVE_BY_ERROR_MSG = 'Openfin API call Window.moveBy() failed.';
const MOVE_TO_ERROR_MSG = 'Openfin API call Window.moveTo() failed.';
const RETORE_ERROR_MSG = 'Openfin API call Window.restore() failed.';
const SHOW_ERROR_MSG = 'Openfin API call Window.show() failed.';
const SET_AS_FOREGROUND_ERROR_MSG = 'Openfin API call Window.setForeground() failed.';
const SET_BOUNDS_ERROR_MSG = 'Openfin API call Window.setBounds() failed.';
const UPDATE_OPTIONS_ERROR_MSG = 'Openfin API call Window.updateOptions() failed.';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#Window
export const newWindowHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (window:any) => {
        dispatch(
            handlerActions.newWindowRes({window}) as any
        );
        return callback(window);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : NEW_WINDOW_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.newWindowRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let window = new fin.desktop.Window(action.payload,()=>{
        let _win = window.getNativeWindow();
        _win.addEventListener("DOMContentLoaded",()=>{
            window.show();
        });
        wrappedCallback(window);
    },wrappedErrorCallback);
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#close
export const closeHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { force, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.closeRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : CLOSE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.closeRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.close(force,wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#focus
export const focusHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.focusRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : FOCUS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.focusRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.focus(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getBounds
export const getBoundsHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (payload:any) => {
        dispatch(
            handlerActions.getBoundsRes(payload) as any
        );
        return callback(payload);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_BOUNDS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getBoundsRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.getBounds(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getState
export const getStateHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (state:string) => {
        dispatch(
            handlerActions.getStateRes({state}) as any
        );
        return callback(state);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_STATE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getStateRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.getState(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getOptions
export const getOptionsHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = (options:any) => {
        dispatch(
            handlerActions.getOptionsRes({options}) as any
        );
        return callback(options);
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : GET_OPTIONS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.getOptionsRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.getOptions(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#hide
export const hideHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.hideRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : HIDE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.hideRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.hide(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#maximize
export const maximizeHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.maximizeRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : MAXIMIZE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.maximizeRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.maximize(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#minimize
export const minimizeHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.minimizeRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : MINIMIZE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.minimizeRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.minimize(wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveBy
export const moveByHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { deltaLeft, deltaTop, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.moveByRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : MOVE_BY_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.moveByRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.moveBy(deltaLeft, deltaTop, wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveTo
export const moveToHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { left, top, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.moveToRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : MOVE_TO_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.moveToRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.moveTo(left, top, wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#restore
export const restoreHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.restoreRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : RETORE_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.restoreRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.restore( wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#show
export const showHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { force, callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.showRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : SHOW_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.showRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.show( force, wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setAsForeground
export const setAsForegroundHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.setAsForegroundRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : SET_AS_FOREGROUND_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.setAsForegroundRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.setAsForeground( wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setBounds
export const setBoundsHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const {
        top, left, height, width,
        callback, errorCallback
    } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.setBoundsRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : SET_BOUNDS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.setBoundsRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.setBounds( left, top, width, height, wrappedCallback,wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#updateOptions
export const updateOptionsHandler = (params:ActionHandlerParams) => {
    const { action, fin, store:{ dispatch } }=params;
    const {
        options,
        callback, errorCallback
    } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.updateOptionsRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : UPDATE_OPTIONS_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.updateOptionsRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let finWindow = fin.desktop.Window.getCurrent();
    finWindow.updateOptions( options, wrappedCallback,wrappedErrorCallback);

};