import {Store, Action, Middleware} from 'redux';
import {appEvents, windowEvents} from './constants';
import {getStateRes} from '../window/actions/handlerActionCreator';

export default function registerDefaultListener(fin: any, store: Store<any>) {

    const finApplication = fin.desktop.Application.getCurrent();
    const finWindow = fin.desktop.Window.getCurrent();
    const {dispatch} = store;

    function _dispatch_getStateRes(event:any) {
        if(event && event.type){
            if (event.type == 'maximized'){
                dispatch(getStateRes({state:'maximized'}) as any);
            }else if (event.type == 'minimized'){
                dispatch(getStateRes({state:'minimized'}) as any);
            }else if (event.type == 'restored'){
                dispatch(getStateRes({state:'restored'}) as any);
            }
        }
    }

    appEvents.forEach((oneEvent)=>{
        finApplication.addEventListener(oneEvent.name, (event:any)=>{
            dispatch(oneEvent.actionCreator(event) as any)
        });
    });

    windowEvents.forEach((oneEvent)=>{
        const theName = oneEvent.name;
        if (
            theName == 'maximized'||
            theName == 'minimized'||
            theName == 'restored'
        ){
            finWindow.addEventListener(theName, (event:any)=>{
                _dispatch_getStateRes(event);
                dispatch(oneEvent.actionCreator(event) as any);
            })
        }else{
            finWindow.addEventListener(theName, (event:any)=>{
                dispatch(oneEvent.actionCreator(event) as any);
            })
        }
    })
}