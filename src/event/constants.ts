import {Action} from 'redux-actions';
import { makeReqType, makeResType } from '../utils/makeType';
import createFSA, {ActionCreator} from '../utils/createFSA';

export class EventConstant{
    name:string;
    type:string;
    actionCreator:ActionCreator<any>;
    constructor(prefix:string,name:string){
        this.name = name;
        this.type = makeResType(prefix+name.split('-').join('_').toUpperCase());
        this.actionCreator = createFSA<any>(
            this.type,
            (options:any)=> <any> options
        )
    }
}

const appEventStrArr:string[]=[
    'closed',
    // 'connected',
    // 'crashed',
    // 'initialized',
    // 'manifest-changed',
    // 'not-responding',
    // 'responding',
    // 'run-requested',
    // 'started',
    // 'tray-icon-clicked',
    // 'window-alert-requested',
    // 'window-auth-requested',
    // 'window-blurred',
    // 'window-bounds-changed',
    // 'window-bounds-changing',
    // 'window-closed',
    // 'window-closing',
    // 'window-crashed',
    // 'window-created',
    // 'window-disabled-frame-bounds-changed',
    // 'window-disabled-frame-bounds-changing',
    // 'window-embedded',
    // 'window-end-load',
    // 'window-external-process-exited',
    // 'window-external-process-started',
    // 'window-focused',
    // 'window-frame-disabled',
    // 'window-frame-enabled',
    // 'window-group-changed',
    // 'window-hidden',
    // 'window-initialized',
    // 'window-maximized',
    // 'window-minimized',
    // 'window-navigation-rejected',
    // 'window-not-responding',
    // 'window-plugins-state-changed',
    // 'window-plugins-state-changing',
    // 'window-preload-scripts-state-changed',
    // 'window-preload-scripts-state-changing',
    // 'window-reloaded',
    // 'window-responding',
    // 'window-restored',
    // 'window-show-requested',
    // 'window-shown',
    // 'window-start-load',
];

const windowEventStrArr:string[] = [
    // 'auth-requested',
    // 'begin-user-bounds-changing',
    'blurred',
    'bounds-changed',
    'bounds-changing',
    'close-requested',
    // 'closed',
    // 'closing',
    // 'crashed',
    // 'disabled-frame-bounds-changed',
    // 'disabled-frame-bounds-changing',
    // 'end-user-bounds-changing',
    // 'embedded',
    // 'external-process-exited',
    // 'external-process-started',
    'focused',
    // 'frame-disabled',
    // 'frame-enabled',
    'group-changed',
    'hidden',
    // 'initialized',
    'maximized',
    'minimized',
    // 'navigation-rejected',
    // 'preload-scripts-state-changed',
    // 'preload-scripts-state-changing',
    // 'reloaded',
    'restored',
    // 'show-requested',
    'shown',
];

export const appEvents:EventConstant[] = appEventStrArr.map(one => {
    return new EventConstant('APP_EVENT::',one);
});

export const windowEvents:EventConstant[] = windowEventStrArr.map(one => {
    return new EventConstant('WIND_EVENT::',one);
});