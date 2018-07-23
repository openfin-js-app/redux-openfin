import {ActionHandlerParams} from "../GlobalTypes";
import * as handlerActions from './actions/handlerActionCreator';
import * as types from './types';

const NEW_APPLICAITON_ERROR_MSG = 'OpenFin API call Application.constructor failed.';
const RESTART_ERROR_MSG = 'OpenFin API call Application.restart() failed.';
const CLOSE_ERROR_MSG = 'OpenFin API call Application.close() failed.';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#Application
export const newApplicatoinHandler = (params:ActionHandlerParams)=>{
  const { action, fin, store:{ dispatch } }=params;
  const { callback, errorCallback } = action.payload;

  const wrappedCallback = (app:any) => {
      dispatch(
          handlerActions.newApplicationRes({app}) as any
      );
      return callback();
  };

  const wrappedErrorCallback = (e:Error) => {
    const errMsg = e && e.message
    ? e.message
    : NEW_APPLICAITON_ERROR_MSG;
    const error = new Error(errMsg);
    dispatch(handlerActions.newApplicationRes({
            name:'Error',
            error
        } ) as any);
    errorCallback(error);
  };

  let application = fin.desktop.Application.geCurrent();

  let app = new fin.desktop.Application(action.payload,function () {
      app.run();
      wrappedCallback(app);
  },wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#restart
export const restartHandler = (params:ActionHandlerParams) =>{
    const { action, fin, store:{ dispatch } }=params;
    const { callback, errorCallback } = action.payload;

    const wrappedCallback = () => {
        dispatch(
            handlerActions.restartRes({}) as any
        );
        return callback();
    };

    const wrappedErrorCallback = (e:Error) => {
        const errMsg = e && e.message
            ? e.message
            : RESTART_ERROR_MSG;
        const error = new Error(errMsg);
        dispatch(handlerActions.restartRes({
            name:'Error',
            error
        } ) as any);
        errorCallback(error);
    };

    let application = fin.desktop.Application.getCurrent();
    application.restart(wrappedCallback, wrappedErrorCallback);

};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#close
export const closeHandler = (params: ActionHandlerParams) =>{
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

    let application = fin.desktop.Application.getCurrent();
    application.close(force,wrappedCallback, wrappedErrorCallback);
};
