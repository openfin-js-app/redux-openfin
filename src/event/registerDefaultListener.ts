import {Store, Action, Middleware} from 'redux';
import { FinApplication, FinWindow } from '../GlobalTypes';
import {appEvents, windowEvents} from './constants';
import {getStateRes} from '../window/actions/handlerActionCreator';

export default function registerDefaultListener(fin: any, store: Store<any>) {

    const finApplication:FinApplication = fin.Application.getCurrentSync();
    const finWindow:FinWindow = fin.Window.getCurrentSync();
    const {dispatch} = store;

    function _dispatch_getStateRes(event:any) {
        if(event && event.type){
            if (event.type == 'maximized'){
                dispatch(getStateRes({state:'maximized'}) as any);
            }else if (event.type == 'minimized'){
                dispatch(getStateRes({state:'minimized'}) as any);
            }else if (event.type == 'restored'){
                dispatch(getStateRes({state:'normal'}) as any);
            }
        }
    }

    appEvents.forEach(async (oneEvent)=>{
        await finApplication.addListener(oneEvent.name, (event:any)=>{
            dispatch(oneEvent.actionCreator(event) as any)
        });
    });

    windowEvents.forEach(async (oneEvent)=>{
        const theName = oneEvent.name;
        if (
            theName == 'maximized'||
            theName == 'minimized'||
            theName == 'restored'
        ){
            await finWindow.addListener(theName, (event:any)=>{
                _dispatch_getStateRes(event);
                dispatch(oneEvent.actionCreator(event) as any);
            })
        }else{
            await finWindow.addListener(theName, (event:any)=>{
                dispatch(oneEvent.actionCreator(event) as any);
            })
        }
    })
}