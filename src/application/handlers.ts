import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#Application
export const newApplicatoinHandler = (params:ActionHandlerParams)=>{
  const { action }=params;
  asyncs.newApplication(action).catch(e =>{
      // eat the exception
  });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#restart
export const restartHandler = (params:ActionHandlerParams) =>{
    const { action }=params;
    asyncs.restart(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#close
export const closeHandler = (params: ActionHandlerParams) =>{
    const { action }=params;
    asyncs.close(action).catch(e =>{
        // eat the exception
    });
};
