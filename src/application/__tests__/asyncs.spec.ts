jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');

import {initState} from '../../init';
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

describe('Application asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('newApplication',async ()=>{
        const fin = {
            desktop:{
                Application : jest.fn((options,succCb,errCb)=>{
                    succCb();
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
        await asyncs.newApplication(
            actions.newApplication({
                uuid:'uuid',
                name:'name',
                mainWindowOptions:{},
            })
        );
        expect(fin.desktop.Application).toHaveBeenCalled();
        expect(succCb).toHaveBeenCalled();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('restart',async ()=>{
        const restart = jest.fn((succCb,errCb)=>{
            succCb();
        });
        initState.currentApplication = {
            restart
        } as any;
        const succCb = jest.fn();
        const errCb = jest.fn();
        createAsyncFun.default=jest.fn(
            (action,ERROR_MSG,resActionCreator,finCb)=>{
                finCb({},action,resActionCreator,succCb,errCb);
            }
        );
        await asyncs.restart(
            actions.restart({})
        );
        expect(restart).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('close',async ()=>{
        const close = jest.fn((force,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                Application:{
                    getCurrent:()=>{
                        return {
                            close
                        }
                    }
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
            actions.close({force:true})
        );
        expect(createAsyncFun).toMatchSnapshot();
    });

});