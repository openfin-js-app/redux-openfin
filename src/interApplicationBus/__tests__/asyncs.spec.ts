jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

describe('InterApplication asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    // it('publish',async ()=>{
    //
    //     const fin = {
    //         desktop:{
    //             InterApplicationBus : {
    //                 publish:jest.fn((topic,message,succCb,errCb)=>{
    //                     succCb();
    //                 })
    //             }
    //         }
    //     };
    //     const succCb = jest.fn();
    //     const errCb = jest.fn();
    //
    //     createAsyncFun.default=jest.fn(
    //         (action,ERROR_MSG,resActionCreator,finCb)=>{
    //             finCb(fin,action,resActionCreator,succCb,errCb);
    //         }
    //     );
    //
    //     await asyncs.publish(actions.publish({
    //         topic:'topic',
    //         message:'message',
    //     }));
    //
    //     expect(fin.InterApplicationBus.publish).toHaveBeenCalled();
    //     expect(succCb).toHaveBeenCalled();
    //     expect(createAsyncFun).toMatchSnapshot();
    //
    // })

    // it('subscribe',async ()=>{
    //
    //     const fin = {
    //         desktop:{
    //             InterApplicationBus : {
    //                 subscribe:jest.fn((senderUuid,name,topic,listener,succCb,errCb)=>{
    //                     succCb();
    //                 })
    //             }
    //         }
    //     };
    //     const succCb = jest.fn();
    //     const errCb = jest.fn();
    //
    //     createAsyncFun.default=jest.fn(
    //         (action,ERROR_MSG,resActionCreator,finCb)=>{
    //             finCb(fin,action,resActionCreator,succCb,errCb);
    //         }
    //     );
    //
    //     await asyncs.subscribe(actions.subscribe({
    //         senderUuid:'senderUuid',
    //         topic:'topic',
    //         listener:(message,uuid,name)=>{},
    //     }));
    //
    //     expect(fin.InterApplicationBus.subscribe).toHaveBeenCalled();
    //     expect(succCb).toHaveBeenCalled();
    //     expect(createAsyncFun).toMatchSnapshot();
    //
    // })


});