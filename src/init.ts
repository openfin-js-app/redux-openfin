import { Store } from 'redux';

import { FinWindow } from './GlobalTypes';

import registerDefaultListener from './event/registerDefaultListener';
import initDocking from './docking/init';
import { IDockingOptions } from './docking/DockingType';

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
    ignoreStore?:boolean,
    autoDocking?:boolean,
    dockingOptions?:Partial<IDockingOptions>,
}

export interface IInitState {
    fin:any,
    store:Store<any>,
    channel:any,
    config:IConfig,
    currentWindow:FinWindow,
}

export const initState:IInitState ={
    fin:null,
    store:null,
    channel:null,
    config:null,
    currentWindow:null,
};

export default (fin: any, config:IConfig, store?: Store<any>)=>{

    initState.config = config;

    if (store){
        registerDefaultListener(fin,store);
    }
    initState.fin = fin;

    if(fin && fin.desktop){
        initState.currentWindow = fin.desktop.Window.getCurrent();
        if (config.autoDocking){
            const dockingOptions = config.dockingOptions?config.dockingOptions:{};
            initDocking(fin,initState.currentWindow,dockingOptions);
        }
    }

    if (config.ignoreStore){
        initState.store = null;
    }else{
        initState.store = store;
    }

}