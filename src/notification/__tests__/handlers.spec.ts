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

describe('Notification handlers',()=>{

    beforeAll(()=>{
        asyncs.createNotification=jest.fn(blankRejectPromiseImpl);
    });

    it('createNotificationHandler',()=>{
        handlers.createNotificationHandler(blankActionHandlerParams);
        expect(asyncs.createNotification).toHaveBeenCalled();
    })

});