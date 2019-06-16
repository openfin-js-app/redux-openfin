jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');
const wrapAsyncFun = require('../../utils/wrapAsyncFun');
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

const getDefaultPromise = ()=>{
    return new Promise(((resolve, reject) => {
        resolve({});
    }))
}

describe('System asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('getMachineId',async ()=>{
        const getMachineId = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getMachineId
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getMachineId(
            actions.getMachineId({})
        );
        expect(getMachineId).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getDeviceUserId',async ()=>{
        const getDeviceUserId = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getDeviceUserId
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getDeviceUserId(
            actions.getDeviceUserId({})
        );
        expect(getDeviceUserId).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getMonitorInfo',async ()=>{
        const getMonitorInfo = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getMonitorInfo
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getMonitorInfo(
            actions.getMonitorInfo({})
        );
        expect(getMonitorInfo).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getVersion',async ()=>{
        const getVersion = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getVersion
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getVersion(
            actions.getVersion({})
        );
        expect(getVersion).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getHostSpecs',async ()=>{
        const getHostSpecs = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getHostSpecs
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getHostSpecs(
            actions.getHostSpecs({})
        );
        expect(getHostSpecs).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('getEnvironmentVariable',async ()=>{
        const getEnvironmentVariable = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                getEnvironmentVariable
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.getEnvironmentVariable(
            actions.getEnvironmentVariable({
                env:'env'
            })
        );
        expect(getEnvironmentVariable).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

    it('clearCache',async ()=>{
        const clearCache = jest.fn(getDefaultPromise);
        const fin = {
            System:{
                clearCache
            }
        };
        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );
        await asyncs.clearCache(
            actions.clearCache({})
        );
        expect(clearCache).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();
    });

})