import {ActionHandlerParams} from "../GlobalTypes";
import * as asyncs from './asyncs';

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#Application
export const startApplicatoinHandler = (params:ActionHandlerParams)=>{
  const { action }=params;
  asyncs.start(action).catch(e =>{
      // eat the exception
  });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#.getCurrent
export const getCurrentHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getCurrent(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getWindow
export const getWindowHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getWindow(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#.wrap
export const wrapHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.wrap(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#addEventListener
export const addListenerHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.addListener(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#close
export const quitHandler = (params: ActionHandlerParams) =>{
    const { action }=params;
    asyncs.quit(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getChildWindows
export const getChildWindowsHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getChildWindows(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getInfo
export const getInfoHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getInfo(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getShortcuts
export const getShortcutsHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getShortcuts(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getTrayIconInfo
export const getTrayIconInfoHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getTrayIconInfo(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#getZoomLevel
export const getZoomLevelHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.getZoomLevel(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#isRunning
export const isRunningHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.isRunning(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#removeEventListener
export const removeListenerHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.removeListener(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#restart
export const restartHandler = (params:ActionHandlerParams) =>{
    const { action }=params;
    asyncs.restart(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#scheduleRestart
export const scheduleRestartHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.scheduleRestart(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#setShortcuts
export const setShortcutsHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.setShortcuts(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#setTrayIcon
export const setTrayIconHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.setTrayIcon(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#setZoomLevel
export const setZoomLevelHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.setZoomLevel(action).catch(e =>{
        // eat the exception
    });
};

//http://cdn.openfin.co/jsdocs/beta/fin.Application.html#terminate
export const terminateHandler = (params:ActionHandlerParams)=>{
    const { action }=params;
    asyncs.terminate(action).catch(e =>{
        // eat the exception
    });
};
