import { Store } from 'redux';

import { FinWindow } from './GlobalTypes';

import registerDefaultListener from './event/registerDefaultListener';

export enum ChannelType{
    STANDALONE,
    PROVIDER,
    CLIENT,
}

export interface IConfig{
    channelType:ChannelType,
    channelName?:string,
    channelRandomSuffix?:boolean,
    channelClientId:string,
    sharedActions:string[],
    ignoreStore?:boolean
}

export interface IInitState {
    fin:any,
    store:Store<any>,
    channel:any,
    currentWindow:FinWindow,
}

export const initState:IInitState ={
    fin:null,
    store:null,
    channel:null,
    currentWindow:null,
};

export default (fin: any, config:IConfig, store?: Store<any>)=>{

    if (store){
        registerDefaultListener(fin,store);
    }
    initState.fin = fin;

    if(fin && fin.desktop){
        initState.currentWindow = fin.desktop.Window.getCurrent();
    }

    if (config.ignoreStore){
        initState.store = null;
    }else{
        initState.store = store;
    }

}