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

describe('Application handlers',()=>{

    beforeAll(()=>{
        asyncs.newApplication=jest.fn(blankRejectPromiseImpl);
        asyncs.restart=jest.fn(blankRejectPromiseImpl);
        asyncs.close=jest.fn(blankRejectPromiseImpl);
    });

    it('newApplicatoinHandler',()=>{
        handlers.newApplicatoinHandler(blankActionHandlerParams);
        expect(asyncs.newApplication).toHaveBeenCalled();
    })

    it('restartHandler',()=>{
        handlers.restartHandler(blankActionHandlerParams);
        expect(asyncs.restart).toHaveBeenCalled();
    })

    it('closeHandler',()=>{
        handlers.closeHandler(blankActionHandlerParams);
        expect(asyncs.close).toHaveBeenCalled();
    })
});