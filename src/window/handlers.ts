import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#.getCurrent
export const getCurrentHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getCurrent(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#.wrap
export const wrapHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.wrap(action).catch((e)=>{
        // eat the exception
    });
};


//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#addEventListener
export const addEventListenerHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.addEventListener(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#authenticate
export const authenticateHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.authenticate(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#bringToFront
export const bringToFrontHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.bringToFront(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#Window
export const createWindowHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.createWindow(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#close
export const closeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.close(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.disableFrame.html
export const disableUserMovementHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.disableUserMovement(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/tutorial-window.enableFrame.html
export const enableUserMovementHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.enableUserMovement(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#focus
export const focusHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.focus(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#getGroup
export const getGroupHandler =(params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getGroup(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#getBounds
export const getBoundsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getBounds(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#getState
export const getStateHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getState(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#getOptions
export const getOptionsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.getOptions(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#hide
export const hideHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.hide(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#joinGroup
export const joinGroupHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.joinGroup(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#leaveGroup
export const leaveGroupHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.leaveGroup(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#maximize
export const maximizeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.maximize(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#mergeGroups
export const mergeGroupsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.mergeGroups(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#minimize
export const minimizeHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.minimize(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#moveBy
export const moveByHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.moveBy(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#moveTo
export const moveToHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.moveTo(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#restore
export const restoreHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.restore(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#show
export const showHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.show(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#setAsForeground
export const setAsForegroundHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.setAsForeground(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#setBounds
export const setBoundsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.setBounds(action).catch((e)=>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Window.html#updateOptions
export const updateOptionsHandler = (params:ActionHandlerParams) => {
    const { action }=params;
    asyncs.updateOptions(action).catch((e)=>{
        // eat the exception
    });
};