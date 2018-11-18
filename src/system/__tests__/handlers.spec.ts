jest.mock('../asyncs');
const asyncs = require('../asyncs');

const blankActionHandlerParams = {
    fin:{},
    store:null,
    next:()=>{},
    action:null,
};

const blankRejectPromiseImpl = ()=>(new Promise((resolve, reject)=>{
    reject('err');
}));


import * as handlers  from '../handlers';

describe('System handlers',()=>{

    beforeAll(()=>{
        asyncs.getMachineId=jest.fn(blankRejectPromiseImpl);
        asyncs.getDeviceUserId=jest.fn(blankRejectPromiseImpl);
        asyncs.getMonitorInfo=jest.fn(blankRejectPromiseImpl);
        asyncs.getVersion=jest.fn(blankRejectPromiseImpl);
        asyncs.getHostSpecs=jest.fn(blankRejectPromiseImpl);
        asyncs.getEnvironmentVariable=jest.fn(blankRejectPromiseImpl);
        asyncs.clearCache=jest.fn(blankRejectPromiseImpl);
    });

    it('getMachineIdHanlder',()=>{
        handlers.getMachineIdHandler(blankActionHandlerParams);
        expect(asyncs.getMachineId).toHaveBeenCalled();
    })

    it('getDeviceUserIdHandler',()=>{
        handlers.getDeviceUserIdHandler(blankActionHandlerParams);
        expect(asyncs.getDeviceUserId).toHaveBeenCalled();
    })

    it('getMonitorInfoHandler',()=>{
        handlers.getMonitorInfoHandler(blankActionHandlerParams);
        expect(asyncs.getMonitorInfo).toHaveBeenCalled();
    })

    it('getVersionHandler',()=>{
        handlers.getVersionHandler(blankActionHandlerParams);
        expect(asyncs.getVersion).toHaveBeenCalled();
    })

    it('getHostSpecsHandler',()=>{
        handlers.getHostSpecsHandler(blankActionHandlerParams);
        expect(asyncs.getHostSpecs).toHaveBeenCalled();
    })

    it('getEnvironmentVariable',()=>{
        handlers.getEnvironmentVariableHandler(blankActionHandlerParams);
        expect(asyncs.getEnvironmentVariable).toHaveBeenCalled();
    })

    it('clearCacheHandler',()=>{
        handlers.clearCacheHandler(blankActionHandlerParams);
        expect(asyncs.clearCache).toHaveBeenCalled();
    })

});