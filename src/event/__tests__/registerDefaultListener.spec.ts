import {Store } from 'redux';
import registerDefaultListener from '../registerDefaultListener';

jest.useFakeTimers();

describe('Event::registerDefaultListener',()=>{

    it('register by default',()=>{
        const appAddEventListener = jest.fn((name,listener)=>{
            listener({})
        });
        const winAddEventListener = jest.fn((name,listener)=>{
            if (
                name == 'maximized'||
                name == 'minimized'||
                name == 'restored'
            ){
                listener({type:name})
            }else{
                listener({})
            }
        });
        const fin = {
            Application:{
                getCurrentSync:()=>({
                    addListener:appAddEventListener,
                })
            },
            Window:{
                getCurrentSync:()=>({
                    addListener:winAddEventListener,
                })
            }
        };
        const store:Store<any> = {
            dispatch:jest.fn(),
            getState:()=>({}),
            subscribe:jest.fn(),
            replaceReducer:jest.fn(),
        } as Store<any>;

        registerDefaultListener(fin,store);

        expect(appAddEventListener).toMatchSnapshot();
        expect(winAddEventListener).toMatchSnapshot();
        expect(store.dispatch).toMatchSnapshot();

    })

})