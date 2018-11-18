import { Action } from 'redux-actions';
import {ChannelType, IConfig} from './init';
import {Store} from "redux";

export const sharedActionDict = new Set();
export const DEFAULT_SHARED_ACTION_CHANNEL_NAME = 'ALBERTLI90_REDUX_OPENFIN_SHARED_ACTIONS';
export const SHARED_ACTION_ORIGIN_TAG = '_albertli90_redux_openfin_origin';

let channelType:ChannelType;
let channel;
let stackedChannel:Array<Action<any>> = [];
let channelUp:number = 0;
let dispatch;

declare const window:any;

// listener is response to consume the action from channel
const sharedActionListener = (type:string)=>(payload:any,src:any)=>{

    // console.log('[redux-openfin]channel::sharedActionListener',type,payload,src);

    if (channelType === ChannelType.PROVIDER){
        channel.publish(type,payload);
    }

    if (payload[SHARED_ACTION_ORIGIN_TAG] !== window[SHARED_ACTION_ORIGIN_TAG]){
        dispatch({type,payload});
    }

}

// handler is response to send actions to the channel
export function sharedActionHandler(action:Action<any>) {

    // console.log('[redux-openfin]channel::sharedActionHandler called',action,channelType,channel,stackedChannel,channelUp);

    if (!action.payload[SHARED_ACTION_ORIGIN_TAG]){
        action.payload[SHARED_ACTION_ORIGIN_TAG]=window[SHARED_ACTION_ORIGIN_TAG];
        stackedChannel.push(action);

        if (channelUp || (channel && channelType === ChannelType.CLIENT)){
            while(stackedChannel.length){
                let theAction = stackedChannel.shift();
                if (channelType === ChannelType.PROVIDER){
                    // console.log('[redux-openfin]channel::sharedActionHandler PROVIDER publish');
                    channel.publish(theAction.type,theAction.payload);
                }else if (channelType === ChannelType.CLIENT){
                    // console.log('[redux-openfin]channel::sharedActionHandler CLIENT dispatch');
                    channel.dispatch(theAction.type,theAction.payload).then((...args)=>{
                        // console.log('[redux-openfin]channel::sharedActionHandler CLIENT dispatch resolved',args);
                    }).catch(e=>{throw e})
                }
            }
        }
    }
}

export default async function f(fin:any,config:IConfig,store?: Store<any>) {

    if (config.channelType != ChannelType.STANDALONE && store){

        const Channel = fin.desktop.InterApplicationBus.Channel;
        const ChannelName = config.channelName?config.channelName:
            (   config.channelRandomSuffix?
                    DEFAULT_SHARED_ACTION_CHANNEL_NAME+'-'+ new Date().getTime()
                :DEFAULT_SHARED_ACTION_CHANNEL_NAME
            );

        dispatch = store.dispatch;

        config.sharedActions.forEach((oneAction:string)=>{
            sharedActionDict.add(oneAction);
        });

        window[SHARED_ACTION_ORIGIN_TAG] = config.channelClientId;

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
            channel = await Channel.create(ChannelName);
            window._albertli90_redux_openfin_channelname = ChannelName;
        }else if (config.channelType === ChannelType.CLIENT){
            if (config.channelRandomSuffix && window.opener._albertli90_redux_openfin_channelname){
                channel = await Channel.connect(window.opener._albertli90_redux_openfin_channelname,{wait:true});
            }else{
                channel = await Channel.connect(ChannelName,{wait:true});
            }
        }

        config.sharedActions.forEach((oneAction:string)=>{
            channel.register(oneAction,sharedActionListener(oneAction))
        });

    }

}