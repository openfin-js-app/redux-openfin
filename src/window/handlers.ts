import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#addEventListener
export const addEventListenerHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.addEventListener(action).catch((e)=>{
        // eat the exception
    });
};


//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#Window
export const newWindowHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.newWindow(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#close
export const closeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.close(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.disableFrame.html
export const disableFrameHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.disableFrame(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.enableFrame.html
export const enableFrameHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.enableFrame(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#focus
export const focusHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.focus(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getBounds
export const getBoundsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getBounds(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getState
export const getStateHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getState(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#getOptions
export const getOptionsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getOptions(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#hide
export const hideHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.hide(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#maximize
export const maximizeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.maximize(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#minimize
export const minimizeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.minimize(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveBy
export const moveByHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.moveBy(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#moveTo
export const moveToHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.moveTo(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#restore
export const restoreHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.restore(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#show
export const showHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.show(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setAsForeground
export const setAsForegroundHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.setAsForeground(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#setBounds
export const setBoundsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.setBounds(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Window.html#updateOptions
export const updateOptionsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.updateOptions(action).catch((e)=>{
        // eat the exception
    });
};