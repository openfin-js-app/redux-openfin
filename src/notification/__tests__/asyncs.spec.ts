jest.mock('../../utils/createAsyncFun');
const createAsyncFun = require('../../utils/createAsyncFun');
import * as actions from '../actions';
import * as asyncs  from '../asyncs';

jest.useFakeTimers();

describe('Notification asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    // it('createNotification',async ()=>{
    //     const fin = {
    //         desktop:{
    //             Notification : jest.fn((options,succCb,errCb)=>{
    //                 setTimeout(()=>{
    //                     succCb();
    //                 },0);
    //                 return {};
    //             })
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
    //     await asyncs.createNotification(
    //         actions.createNotification({
    //             ignoreMouseOver:false,
    //             url:'url',
    //             message:'message',
    //             onClick:()=>{},
    //             onClose:()=>{},
    //             onDismiss:()=>{},
    //             onError:()=>{},
    //             onMessage:()=>{},
    //             onShow:()=>{},
    //             timeout:3000,
    //             opacity:1,
    //         })
    //     );
    //     jest.runAllTimers();
    //     expect(fin.Notification).toBeCalled();
    //     expect(succCb).toHaveBeenCalled();
    //     expect(createAsyncFun).toMatchSnapshot();
    // });

});