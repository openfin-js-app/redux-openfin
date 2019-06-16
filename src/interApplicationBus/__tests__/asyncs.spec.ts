jest.mock('../../utils/createAsyncFun');
const wrapAsyncFun = require('../../utils/wrapAsyncFun');

import * as actions from '../actions';
import * as asyncs  from '../asyncs';

const getDefaultPromise = ()=>{
    return new Promise(((resolve, reject) => {
        resolve({});
    }))
}

describe('InterApplication asyncs',()=>{

    afterEach(()=>{
        jest.resetAllMocks();
    });

    it('publish',async ()=>{

        const fin = {
            InterApplicationBus : {
                publish:jest.fn(getDefaultPromise),
            }
        };

        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );

        await asyncs.publish(actions.publish({
            topic:'topic',
            message:'message',
        }));

        expect(fin.InterApplicationBus.publish).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();

    })

    it('subscribe',async ()=>{

        const fin = {
            InterApplicationBus : {
                subscribe:jest.fn(getDefaultPromise),
            }
        };

        wrapAsyncFun.default=jest.fn(
            async (action,resActionCreator,finCb)=>{
                return await finCb(fin,action,resActionCreator);
            }
        );

        await asyncs.subscribe(actions.subscribe({
            senderUuid:'senderUuid',
            topic:'topic',
            listener:(message,uuid,name)=>{},
        } as any));

        expect(fin.InterApplicationBus.subscribe).toHaveBeenCalled();
        expect(wrapAsyncFun.default).toHaveBeenCalled();

    })


});