import { Store } from 'redux';

import registerDefaultListener from './event/registerDefaultListener';

export interface IConfig{
    ignoreStore?:boolean
}

export interface IInitState {
    fin:any,
    store:Store<any>,
}

export const initState:IInitState ={
    fin:null,
    store:null,
};

export default (fin: any, config:IConfig, store?: Store<any>)=>{

    if (store){
        registerDefaultListener(fin,store);
    }
    initState.fin = fin;

    if (config.ignoreStore){
        initState.store = null;
    }else{
        initState.store = store;
    }

}