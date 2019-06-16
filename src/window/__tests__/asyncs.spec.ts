jest.mock('../../utils/createAsyncFun');
jest.mock('../../utils/wrapAsyncFun');
jest.mock('../../utils/toLegacyFinWindow');
jest.mock('../../init');
jest.mock('../../docking/init');

const wrapAsyncFun = require('../../utils/wrapAsyncFun');
const toLegacyFinWindow = require('../../utils/toLegacyFinWindow');
const init = require('../../init');
const dockingInit = require('../../docking/init');

import { FinWindow } from '../../GlobalTypes'

import * as actions from '../actions';
import * as asyncs  from '../asyncs';

jest.useFakeTimers();

const getDefaultPromise = ()=>{
    return new Promise(((resolve, reject) => {
        resolve({});
    }))
}

describe('Window asyncs',()=>{

    beforeEach(()=>{
        init.initState = {};
    })

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('getCurrent without init',async ()=>{

        init.initState.currentWindow = null;

        const fin = {
            Window:{
                getCurrent: jest.fn(getDefaultPromise),
                getCurrentSync: jest.fn(()=>{
                    return {};
                })
            }
        };

        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getCurrent(
            actions.getCurrent({})
        );
        expect(fin.Window.getCurrentSync).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getCurrent with init',async ()=>{

        init.initState.currentWindow = {};

        const fin = {
            Window:{
                getCurrent: jest.fn(getDefaultPromise),
                getCurrentSync: jest.fn(()=>{
                    return {};
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getCurrent(
            actions.getCurrent({})
        );
        expect(fin.Window.getCurrentSync).not.toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('addEventListener',async ()=>{
        const addListener = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {addListener};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        addListener,
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.addListener(
            actions.addListener({
                type:'type',
                listener:()=>{}
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(addListener).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('bringToFront',async ()=>{
        const bringToFront = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {bringToFront};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        bringToFront
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.bringToFront(
            actions.bringToFront({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(bringToFront).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });


    it('newWindow',async ()=>{

        dockingInit.initState.dockingManager = {
           register:jest.fn(),
        }

        toLegacyFinWindow.default = (one)=>one;

        const fin = {
            Window:{
                create:jest.fn(getDefaultPromise)
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.createWindow(
            actions.createWindow({
            })
        );
        expect(fin.Window.create).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('close',async ()=>{
        const close = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {close};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        close
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.close(
            actions.close({
                force:false,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(close).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('disableFrame',async ()=>{
        const disableUserMovement = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {disableUserMovement};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        disableUserMovement
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.disableUserMovement(
            actions.disableUserMovement({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(disableUserMovement).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('enableFrame',async ()=>{
        const enableUserMovement = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {enableUserMovement};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        enableUserMovement
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.enableUserMovement(
            actions.enableUserMovement({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(enableUserMovement).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('focus',async ()=>{
        const focus = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {focus};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        focus
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.focus(
            actions.focus({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(focus).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getGroup',async ()=>{
        const getGroup = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {getGroup};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        getGroup
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getGroup(
            actions.getGroup({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(getGroup).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getBounds',async ()=>{
        const getBounds = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {getBounds};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        getBounds
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getBounds(
            actions.getBounds({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(getBounds).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getState',async ()=>{
        const getState = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {getState};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        getState
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getState(
            actions.getState({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(getState).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getOptions',async ()=>{
        const getOptions = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {getOptions};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        getOptions
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getOptions(
            actions.getOptions({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(getOptions).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('hide',async ()=>{
        const hide = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {hide};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        hide
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.hide(
            actions.hide({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(hide).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('joinGroup',async ()=>{
        const joinGroup = jest.fn(async (targetWindow)=>{
            return await getDefaultPromise();
        });
        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );

        const currentWindow:any = { joinGroup };

        await asyncs.joinGroup(
            actions.joinGroup({
                currentWindow:currentWindow as FinWindow,
                targetWindow:{} as FinWindow,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(joinGroup).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('leaveGroup',async ()=>{
        const leaveGroup = jest.fn(getDefaultPromise);
        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );

        const currentWindow:any = { leaveGroup };

        await asyncs.leaveGroup(
            actions.leaveGroup({
                targetWindow:currentWindow as FinWindow,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(leaveGroup).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('maximize',async ()=>{
        const maximize = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {maximize};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        maximize
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.maximize(
            actions.maximize({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(maximize).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('mergeGroups',async ()=>{
        const mergeGroups = jest.fn(async (targetWindow)=>{
            return await getDefaultPromise();
        });
        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );

        const currentWindow:any = { mergeGroups };

        await asyncs.mergeGroups(
            actions.mergeGroups({
                currentWindow:currentWindow as FinWindow,
                targetWindow:{} as FinWindow,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(mergeGroups).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('minimize',async ()=>{
        const minimize = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {minimize};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        minimize
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.minimize(
            actions.minimize({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(minimize).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('moveBy',async ()=>{
        const moveBy = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {moveBy};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        moveBy
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.moveBy(
            actions.moveBy({
                deltaLeft:1,
                deltaTop:1,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(moveBy).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('moveTo',async ()=>{
        const moveTo = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {moveTo};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        moveTo
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.moveTo(
            actions.moveTo({
                left:1,
                top:1,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(moveTo).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('restore',async ()=>{
        const restore = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {restore};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        restore
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.restore(
            actions.restore({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(restore).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('show',async ()=>{
        const show = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {show};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        show
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.show(
            actions.show({
                force:true,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(show).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('setAsForeground',async ()=>{
        const setAsForeground = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {setAsForeground};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        setAsForeground
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.setAsForeground(
            actions.setAsForeground({
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(setAsForeground).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('setBounds',async ()=>{
        const setBounds = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {setBounds};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        setBounds
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.setBounds(
            actions.setBounds({
                top:1,
                left:2,
                height:3,
                width:4,
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(setBounds).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('updateOptions',async ()=>{
        const updateOptions = jest.fn(getDefaultPromise);

        init.initState.currentWindow = {updateOptions};

        const fin = {
            Window:{
                getCurrent: jest.fn(()=>{
                    return {
                        updateOptions
                    };
                })
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.updateOptions(
            actions.updateOptions({
                options:{}
            })
        );
        expect(fin.Window.getCurrent).not.toBeCalled();
        expect(updateOptions).toBeCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

})