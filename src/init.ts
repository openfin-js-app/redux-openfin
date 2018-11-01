import { Store } from 'redux';

import registerDefaultListener from './event/registerDefaultListener';

interface IInitState {
    fin:any,
    store:Store<any>,
}

export const initState:IInitState ={
    fin:null,
    store:null,
};

export default (fin: any, store?: Store<any>)=>{
    if (store){
        registerDefaultListener(fin,store);
    }
    initState.fin = fin;
    initState.store = store;
}