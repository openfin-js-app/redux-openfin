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

describe('InterApplication handlers',()=>{

    beforeAll(()=>{
        asyncs.publish=jest.fn(blankRejectPromiseImpl);
        asyncs.subscribe=jest.fn(blankRejectPromiseImpl);
    });

    it('publishHandler',()=>{
        handlers.publishHandler(blankActionHandlerParams);
        expect(asyncs.publish).toHaveBeenCalled();
    })

    it('subscribeHandler',()=>{
        handlers.subscribeHandler(blankActionHandlerParams);
        expect(asyncs.subscribe).toHaveBeenCalled();
    })

});