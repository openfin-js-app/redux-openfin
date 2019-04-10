jest.mock('../../init');
import {initState} from '../../init';

import createAsyncFun from '../createAsyncFun';

describe('createAsyncFun util',()=>{

    afterEach(()=>{
        jest.restoreAllMocks();
    });

    it('async resolved',async ()=>{

        const response = await createAsyncFun<any,any>(
            {
                type:'action_name',
                payload:{}
            },
            'err_msg',
            (options:any):any=>({type:'action_name_res',payload:options}),
            (fin,action,resActionCreator,succCb,errCb)=>{
                succCb({
                    type:'res_action_name',
                    payload:{}
                })
            }
        );

        expect(response).toMatchSnapshot();
        expect(initState.store.dispatch).toMatchSnapshot();

    })

    it('async rejected with reason str',async ()=>{

        try{
            await createAsyncFun<any,any>(
                {
                    type:'action_name',
                    payload:{}
                },
                'err_msg',
                (options:any):any=>({type:'action_name_res',payload:options}),
                (fin,action,resActionCreator,succCb,errCb)=>{
                    errCb('err')
                }
            );
        }catch (e) {
            expect(e).toMatchSnapshot();
        }
        expect(initState.store.dispatch).toMatchSnapshot();

    })

    describe('fin not injected',()=>{

        beforeEach(()=>{
            initState.fin = null;
        })

        afterEach(()=>{
            initState.fin = {};
        })

        it('throw exception by default',async ()=>{
            try{
                await createAsyncFun<any,any>(
                    {
                        type:'action_name',
                        payload:{}
                    },
                    'err_msg',
                    (options:any):any=>({type:'action_name_res',payload:options}),
                    (fin,action,resActionCreator,succCb,errCb)=>{
                        succCb({
                            type:'res_action_name',
                            payload:{}
                        })
                    }
                );
            }catch (e) {
                expect(e).toMatchSnapshot();
            }
            expect(initState.store.dispatch).toMatchSnapshot();
        })
    })

    describe('fin & store not injected',()=>{

        const oldStore = initState.store;

        beforeEach(()=>{
            initState.fin = null;
            initState.store = null;
        })

        afterEach(()=>{
            initState.fin = {};
            initState.store = oldStore;
        })

        it('throw exception by default',async ()=>{
            try{
                await createAsyncFun<any,any>(
                    {
                        type:'action_name',
                        payload:{}
                    },
                    'err_msg',
                    (options:any):any=>({type:'action_name_res',payload:options}),
                    (fin,action,resActionCreator,succCb,errCb)=>{
                        succCb({
                            type:'res_action_name',
                            payload:{}
                        })
                    }
                );
            }catch (e) {
                expect(e).toMatchSnapshot();
            }
        })
    })

});