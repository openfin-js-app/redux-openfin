jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

describe('System asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('getMachineId',async ()=>{
        const getMachineId = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                System:{
                    getMachineId
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
        await asyncs.getMachineId(
            actions.getMachineId({})
        );
        expect(getMachineId).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getDeviceUserId',async ()=>{
        const getDeviceUserId = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                System:{
                    getDeviceUserId
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
        await asyncs.getDeviceUserId(
            actions.getDeviceUserId({})
        );
        expect(getDeviceUserId).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getMonitorInfo',async ()=>{
        const getMonitorInfo = jest.fn((succCb,errCb)=>{
            succCb({});
        });
        const fin = {
            desktop:{
                System:{
                    getMonitorInfo
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
        await asyncs.getMonitorInfo(
            actions.getMonitorInfo({})
        );
        expect(getMonitorInfo).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getVersion',async ()=>{
        const getVersion = jest.fn((succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                System:{
                    getVersion
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
        await asyncs.getVersion(
            actions.getVersion({})
        );
        expect(getVersion).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getHostSpecs',async ()=>{
        const getHostSpecs = jest.fn((succCb,errCb)=>{
            succCb({});
        });
        const fin = {
            desktop:{
                System:{
                    getHostSpecs
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
        await asyncs.getHostSpecs(
            actions.getHostSpecs({})
        );
        expect(getHostSpecs).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('getEnvironmentVariable',async ()=>{
        const getEnvironmentVariable = jest.fn((env,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                System:{
                    getEnvironmentVariable
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
        await asyncs.getEnvironmentVariable(
            actions.getEnvironmentVariable({
                env:'env'
            })
        );
        expect(getEnvironmentVariable).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

    it('clearCache',async ()=>{
        const clearCache = jest.fn((options,succCb,errCb)=>{
            succCb();
        });
        const fin = {
            desktop:{
                System:{
                    clearCache
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
        await asyncs.clearCache(
            actions.clearCache({})
        );
        expect(clearCache).toMatchSnapshot();
        expect(succCb).toMatchSnapshot();
        expect(createAsyncFun).toMatchSnapshot();
    });

})