jest.mock('../../utils/createAsyncFun');
const wrapAsyncFun = require('../../utils/wrapAsyncFun');

import {initState} from '../../init';
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

const getDefaultPromise = ()=>{
    return new Promise(((resolve, reject) => {
        resolve({});
    }))
}

describe('Application asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('newApplication',async ()=>{
        const fin = {
            Application :{
                start:jest.fn(getDefaultPromise)
            }
        };

        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.start(
            actions.startApplication({
                uuid:'uuid',
                name:'name',
                mainWindowOptions:{},
            })
        );
        expect(fin.Application.start).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('restart',async ()=>{
        const restart = jest.fn(getDefaultPromise);
        initState.currentApplication = {
            restart
        } as any;
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb({},action,resActionCreator);
            }
        );
        await asyncs.restart(
            actions.restart({})
        );
        expect(restart).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('close',async ()=>{
        const terminate = jest.fn(getDefaultPromise);
        initState.currentApplication = {
            terminate
        } as any;
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb({},action,resActionCreator);
            }
        );
        await asyncs.terminate(
            actions.terminate({force:true})
        );
        expect(terminate).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

});