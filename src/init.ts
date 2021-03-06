import { Store } from 'redux';

import { FinWindow, FinApplication } from './GlobalTypes';
import initChannel from './channel';

import registerDefaultListener from './event/registerDefaultListener';
import initDocking from './docking/init';
import { IDockingOptions } from './docking/DockingType';

export enum ChannelType{
    STANDALONE = 1,
    PROVIDER = 2,
    CLIENT = 3,
}

export interface IConfig{
    finUuid:string,
    channelType?:ChannelType,
    channelName?:string,
    channelRandomSuffix?:boolean,
    channelClientId?:string,
    sharedActions:string[],
    ignoreStore?:boolean,
    autoDocking?:boolean,
    dockingOptions?:Partial<IDockingOptions>,
    libDispatchFieldName?:string,
}

export interface IInitState {
    fin:any,
    store:Store<any>,
    channel:any,
    config:IConfig,
    currentWindow:FinWindow,
    currentApplication:FinApplication,
}

export const initState:IInitState ={
    fin:null,
    store:null,
    channel:null,
    config:null,
    currentWindow:null,
    currentApplication:null,
};

let initialized = false;

function init(fin: any, config:IConfig, store?: Store<any>){

    if (!initialized){

        initChannel(fin,config,store).catch(e=>{
            throw e;
        });

        initialized = true;
        initState.config = config;

        if (store){
            registerDefaultListener(fin,store);
        }
        initState.fin = fin;

        if(fin && fin){
            initState.currentApplication = fin.Application.getCurrentSync();
            initState.currentWindow = fin.Window.getCurrentSync();
            if (config.autoDocking && config.channelType === ChannelType.PROVIDER){
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

}

export default init;