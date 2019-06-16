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

describe('Window handlers',()=>{

    beforeAll(()=>{
        asyncs.getCurrent=jest.fn(blankRejectPromiseImpl);
        asyncs.wrap=jest.fn(blankRejectPromiseImpl);
        asyncs.addListener=jest.fn(blankRejectPromiseImpl);
        asyncs.bringToFront=jest.fn(blankRejectPromiseImpl);
        asyncs.createWindow=jest.fn(blankRejectPromiseImpl);
        asyncs.close=jest.fn(blankRejectPromiseImpl);
        asyncs.disableUserMovement=jest.fn(blankRejectPromiseImpl);
        asyncs.enableUserMovement=jest.fn(blankRejectPromiseImpl);
        asyncs.focus=jest.fn(blankRejectPromiseImpl);
        asyncs.getGroup=jest.fn(blankRejectPromiseImpl);
        asyncs.getBounds=jest.fn(blankRejectPromiseImpl);
        asyncs.getState=jest.fn(blankRejectPromiseImpl);
        asyncs.getOptions=jest.fn(blankRejectPromiseImpl);
        asyncs.hide=jest.fn(blankRejectPromiseImpl);
        asyncs.joinGroup=jest.fn(blankRejectPromiseImpl);
        asyncs.leaveGroup=jest.fn(blankRejectPromiseImpl);
        asyncs.maximize=jest.fn(blankRejectPromiseImpl);
        asyncs.mergeGroups=jest.fn(blankRejectPromiseImpl);
        asyncs.minimize=jest.fn(blankRejectPromiseImpl);
        asyncs.moveBy=jest.fn(blankRejectPromiseImpl);
        asyncs.moveTo=jest.fn(blankRejectPromiseImpl);
        asyncs.restore=jest.fn(blankRejectPromiseImpl);
        asyncs.show=jest.fn(blankRejectPromiseImpl);
        asyncs.setAsForeground=jest.fn(blankRejectPromiseImpl);
        asyncs.setBounds=jest.fn(blankRejectPromiseImpl);
        asyncs.updateOptions=jest.fn(blankRejectPromiseImpl);
    });

    it('getCurrentHandler',()=>{
        handlers.getCurrentHandler(blankActionHandlerParams);
        expect(asyncs.getCurrent).toHaveBeenCalled();
    })

    it('wrapHandler',()=>{
        handlers.wrapHandler(blankActionHandlerParams);
        expect(asyncs.wrap).toHaveBeenCalled();
    })

    it('addEventListenerHandler',()=>{
        handlers.addListenerHandler(blankActionHandlerParams);
        expect(asyncs.addListener).toHaveBeenCalled();
    })

    it('bringToFrontHandler',()=>{
        handlers.bringToFrontHandler(blankActionHandlerParams);
        expect(asyncs.bringToFront).toHaveBeenCalled();
    })

    it('newWindowHandler',()=>{
        handlers.createWindowHandler(blankActionHandlerParams);
        expect(asyncs.createWindow).toHaveBeenCalled();
    })

    it('closeHandler',()=>{
        handlers.closeHandler(blankActionHandlerParams);
        expect(asyncs.close).toHaveBeenCalled();
    })

    it('disableFrameHandler',()=>{
        handlers.disableUserMovementHandler(blankActionHandlerParams);
        expect(asyncs.disableUserMovement).toHaveBeenCalled();
    })

    it('enableFrameHandler',()=>{
        handlers.enableUserMovementHandler(blankActionHandlerParams);
        expect(asyncs.enableUserMovement).toHaveBeenCalled();
    })

    it('focusHandler',()=>{
        handlers.focusHandler(blankActionHandlerParams);
        expect(asyncs.focus).toHaveBeenCalled();
    })

    it('getGroupHandler',()=>{
        handlers.getGroupHandler(blankActionHandlerParams);
        expect(asyncs.getGroup).toHaveBeenCalled();
    })

    it('getBoundsHandler',()=>{
        handlers.getBoundsHandler(blankActionHandlerParams);
        expect(asyncs.getBounds).toHaveBeenCalled();
    })

    it('getStateHandler',()=>{
        handlers.getStateHandler(blankActionHandlerParams);
        expect(asyncs.getState).toHaveBeenCalled();
    })

    it('getOptionsHandler',()=>{
        handlers.getOptionsHandler(blankActionHandlerParams);
        expect(asyncs.getOptions).toHaveBeenCalled();
    })

    it('hideHandler',()=>{
        handlers.hideHandler(blankActionHandlerParams);
        expect(asyncs.hide).toHaveBeenCalled();
    })

    it('joinGroupHandler',()=>{
        handlers.joinGroupHandler(blankActionHandlerParams);
        expect(asyncs.joinGroup).toHaveBeenCalled();
    })

    it('leaveGroupHandler',()=>{
        handlers.leaveGroupHandler(blankActionHandlerParams);
        expect(asyncs.leaveGroup).toHaveBeenCalled();
    })

    it('maximizeHandler',()=>{
        handlers.maximizeHandler(blankActionHandlerParams);
        expect(asyncs.maximize).toHaveBeenCalled();
    })

    it('mergeGroupsHandler',()=>{
        handlers.mergeGroupsHandler(blankActionHandlerParams);
        expect(asyncs.mergeGroups).toHaveBeenCalled();
    })

    it('minimizeHandler',()=>{
        handlers.minimizeHandler(blankActionHandlerParams);
        expect(asyncs.minimize).toHaveBeenCalled();
    })

    it('moveByHandler',()=>{
        handlers.moveByHandler(blankActionHandlerParams);
        expect(asyncs.moveBy).toHaveBeenCalled();
    })

    it('moveToHandler',()=>{
        handlers.moveToHandler(blankActionHandlerParams);
        expect(asyncs.moveTo).toHaveBeenCalled();
    })

    it('restoreHandler',()=>{
        handlers.restoreHandler(blankActionHandlerParams);
        expect(asyncs.restore).toHaveBeenCalled();
    })

    it('showHandler',()=>{
        handlers.showHandler(blankActionHandlerParams);
        expect(asyncs.show).toHaveBeenCalled();
    })

    it('showHandler',()=>{
        handlers.setAsForegroundHandler(blankActionHandlerParams);
        expect(asyncs.setAsForeground).toHaveBeenCalled();
    })

    it('setBoundsHandler',()=>{
        handlers.setBoundsHandler(blankActionHandlerParams);
        expect(asyncs.setBounds).toHaveBeenCalled();
    })

    it('updateOptionsHandler',()=>{
        handlers.updateOptionsHandler(blankActionHandlerParams);
        expect(asyncs.updateOptions).toHaveBeenCalled();
    })

})