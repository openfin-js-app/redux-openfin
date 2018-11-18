jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

jest.useFakeTimers();

describe('Window asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('getCurrent',async ()=>{
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {};
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.getCurrent(
            actions.getCurrent({})
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('addEventListener',async ()=>{
        const addEventListener = jest.fn((type,listener,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            addEventListener
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.addEventListener(
            actions.addEventListener({
                type:'type',
                listener:()=>{}
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(addEventListener).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('bringToFront',async ()=>{
        const bringToFront = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            bringToFront
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.bringToFront(
            actions.bringToFront({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(bringToFront).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });


    it('newWindow',async ()=>{
        const fin = {
            desktop:{
                Window:jest.fn((options,succCb,errCb)=>{
                    setTimeout(()=>{
                        succCb();
                    },0);
                    return {};
                })
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.newWindow(
            actions.newWindow({
            })
        );
        jest.runAllTimers();
        expect(fin.desktop.Window).toBeCalled();
        // expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('close',async ()=>{
        const close = jest.fn((force,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            close
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.close(
            actions.close({
                force:false,
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(close).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('disableFrame',async ()=>{
        const disableFrame = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            disableFrame
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.disableFrame(
            actions.disableFrame({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(disableFrame).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('enableFrame',async ()=>{
        const enableFrame = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            enableFrame
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.enableFrame(
            actions.enableFrame({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(enableFrame).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('focus',async ()=>{
        const focus = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            focus
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.focus(
            actions.focus({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(focus).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getGroup',async ()=>{
        const getGroup = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            getGroup
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.getGroup(
            actions.getGroup({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(getGroup).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getBounds',async ()=>{
        const getBounds = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            getBounds
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.getBounds(
            actions.getBounds({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(getBounds).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getState',async ()=>{
        const getState = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            getState
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.getState(
            actions.getState({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(getState).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getOptions',async ()=>{
        const getOptions = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            getOptions
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.getOptions(
            actions.getOptions({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(getOptions).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('hide',async ()=>{
        const hide = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            hide
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.hide(
            actions.hide({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(hide).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('joinGroup',async ()=>{
        const joinGroup = jest.fn((targetWindow,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.joinGroup(
            actions.joinGroup({
                currentWindow:{
                    joinGroup
                },
                targetWindow:{},
            })
        );
        expect(fin.desktop.Window.getCurrent).not.toBeCalled();
        expect(joinGroup).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('leaveGroup',async ()=>{
        const leaveGroup = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.leaveGroup(
            actions.leaveGroup({
                currentWindow:{
                    leaveGroup
                }
            })
        );
        expect(fin.desktop.Window.getCurrent).not.toBeCalled();
        expect(leaveGroup).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('maximize',async ()=>{
        const maximize = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            maximize
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.maximize(
            actions.maximize({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(maximize).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('mergeGroups',async ()=>{
        const mergeGroups = jest.fn((targetWindow,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.mergeGroups(
            actions.mergeGroups({
                currentWindow:{
                    mergeGroups
                },
                targetWindow:{}
            })
        );
        expect(fin.desktop.Window.getCurrent).not.toBeCalled();
        expect(mergeGroups).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('minimize',async ()=>{
        const minimize = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            minimize
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.minimize(
            actions.minimize({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(minimize).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('moveBy',async ()=>{
        const moveBy = jest.fn((deltaLeft, deltaTop,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            moveBy
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.moveBy(
            actions.moveBy({
                deltaLeft:1,
                deltaTop:1,
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(moveBy).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('moveTo',async ()=>{
        const moveTo = jest.fn((left, top, succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            moveTo
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.moveTo(
            actions.moveTo({
                left:1,
                top:1,
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(moveTo).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('restore',async ()=>{
        const restore = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            restore
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.restore(
            actions.restore({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(restore).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('show',async ()=>{
        const show = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            show
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.show(
            actions.show({
                force:true,
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(show).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('setAsForeground',async ()=>{
        const setAsForeground = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            setAsForeground
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.setAsForeground(
            actions.setAsForeground({
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(setAsForeground).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('setBounds',async ()=>{
        const setBounds = jest.fn((left, top, width, height,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            setBounds
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
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
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(setBounds).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('updateOptions',async ()=>{
        const updateOptions = jest.fn((options,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Window:{
                    getCurrent: jest.fn(()=>{
                        return {
                            updateOptions
                        };
                    })
                }
            }
        };
        const succCb = jest.fn();
        const errCb = jest.fn();

        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb(fin,action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.updateOptions(
            actions.updateOptions({
                options:{}
            })
        );
        expect(fin.desktop.Window.getCurrent).toBeCalled();
        expect(updateOptions).toBeCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

})