jest.mock('../asyncs');
const asyncs = require('../asyncs');

const blankActionHandlerParams = {
    fin:{},
    store:null,
    next:()=>{},
    action:null,
};


import * as handlers  from '../handlers';

const getDefaultPromise = ()=>{
    return new Promise(((resolve, reject) => {
        resolve(void 0);
    }))
}

describe('Application handlers',()=>{

    beforeAll(()=>{
        asyncs.start=jest.fn(()=> getDefaultPromise());
        asyncs.restart=jest.fn(()=> getDefaultPromise());
        asyncs.quit=jest.fn(()=> getDefaultPromise());
    });

    it('newApplicatoinHandler',()=>{
        handlers.startApplicatoinHandler(blankActionHandlerParams);
        expect(asyncs.start).toHaveBeenCalled();
    })

    it('restartHandler',()=>{
        handlers.restartHandler(blankActionHandlerParams);
        expect(asyncs.restart).toHaveBeenCalled();
    })

    it('closeHandler',()=>{
        handlers.quitHandler(blankActionHandlerParams);
        expect(asyncs.quit).toHaveBeenCalled();
    })
});