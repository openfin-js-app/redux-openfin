import { Action } from 'redux-actions';
import {Store} from "redux";
import {
    ChannelType, IConfig,
    initState,
} from './init';

import { IFinIdentity } from './GlobalTypes';

export const sharedActionDict = new Set();
export const DEFAULT_SHARED_ACTION_CHANNEL_NAME = 'ALBERTLI90_REDUX_OPENFIN_SHARED_ACTIONS';
export const SHARED_ACTION_ORIGIN_TAG = '_albertli90_redux_openfin_origin';

let channelType:ChannelType;
let channel;
let stackedChannel:Array<Action<any>> = [];
let channelUp:number = 0;
let dispatch;
// let channelConfig:IConfig = void 0;

declare const window:any;

// listener is response to consume the action from channel
const sharedActionListener = (type:string)=>(action:Action<any>,identity:IFinIdentity)=>{

    if (!('identity' in action)){
        action['identity'] = identity;
    }

    console.log('[redux-openfin]channel::sharedActionListener',type,action,identity);

    if (channelType === ChannelType.PROVIDER){
        channel.publish(type,action);
    }

    if (action[SHARED_ACTION_ORIGIN_TAG] !== window[SHARED_ACTION_ORIGIN_TAG]){
        dispatch(action);
    }

}

// handler is response to send actions to the channel
export function sharedActionHandler(action:Action<any>) {

    // console.log('[redux-openfin]channel::sharedActionHandler called',action,channelType,channel,stackedChannel,channelUp);

    if (!action[SHARED_ACTION_ORIGIN_TAG]){
        action[SHARED_ACTION_ORIGIN_TAG]=window[SHARED_ACTION_ORIGIN_TAG];
        stackedChannel.push(action);

        if (channelUp || (channel && channelType === ChannelType.CLIENT)){
            while(stackedChannel.length){
                let theAction = stackedChannel.shift();
                if (channelType === ChannelType.PROVIDER){
                    console.log('[redux-openfin]channel::sharedActionHandler PROVIDER publish');
                    channel.publish(theAction.type,theAction);
                }else if (channelType === ChannelType.CLIENT){
                    console.log('[redux-openfin]channel::sharedActionHandler CLIENT dispatch');
                    channel.dispatch(theAction.type,theAction).then((...args)=>{
                        console.log('[redux-openfin]channel::sharedActionHandler CLIENT dispatch resolved',args);
                    }).catch(e=>{throw e})
                }
            }
        }
    }
}

export default async (fin:any,config:IConfig,store?: Store<any>) => {

    if (!config.channelType){
        config.channelType = window.name === config.finUuid?ChannelType.PROVIDER:ChannelType.CLIENT
    }

    if (config.channelType != ChannelType.STANDALONE && store){

        const Channel = fin.InterApplicationBus.Channel;
        let ChannelName = config.channelName?config.channelName:
            (   config.channelRandomSuffix?
                    DEFAULT_SHARED_ACTION_CHANNEL_NAME+'-'+ new Date().getTime()
                :DEFAULT_SHARED_ACTION_CHANNEL_NAME
            );

        dispatch = store.dispatch;

        config.sharedActions.forEach((oneAction:string)=>{
            sharedActionDict.add(oneAction);
        });

        window[SHARED_ACTION_ORIGIN_TAG] = config.channelClientId?config.channelClientId:window.name;

        Channel.onChannelConnect(()=>{
            channelUp++;
            // console.log('[redux-openfin]channel::onChannelConnect',channelUp);
        });

        Channel.onChannelDisconnect(()=>{
            channelUp--;
            // console.log('[redux-openfin]channel::onChannelDisconnect',channelUp);
        });

        channelType = config.channelType;

        if (config.channelType === ChannelType.PROVIDER){
            try{
                channel = await Channel.create(ChannelName);
            }catch(e){
                // console.error('[redux-openfin]channel::default',e);
                ChannelName = ChannelName+'-'+ new Date().getTime();
                channel = await Channel.create(ChannelName);
                console.log(`[redux-openfin] Duplicate channel name found and use ${ChannelName} instead`)
            }
            initState.channel = channel;
            window._albertli90_redux_openfin_channelname = ChannelName;
        }else if (config.channelType === ChannelType.CLIENT){
            if (window.opener._albertli90_redux_openfin_channelname){
                channel = await Channel.connect(window.opener._albertli90_redux_openfin_channelname,{wait:true});
            }else{
                channel = await Channel.connect(ChannelName,{wait:true});
            }
            initState.channel = channel;
        }

        config.sharedActions.forEach((oneAction:string)=>{
            channel.register(oneAction,sharedActionListener(oneAction))
        });

        // channelConfig = config;

    }

}