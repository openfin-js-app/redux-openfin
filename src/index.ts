import * as _application from './application/index';
import * as _event from './event/index';
import * as _notification from './notification/index';
import * as _system from './system/index';
import * as _window from './window/index';
import { middlewareCreator } from './middleware';

export const Applcation:typeof _application = _application;
export const Event:typeof _event = _event;
export const Notification:typeof _notification = _notification;
export const System:typeof _system = _system;
export const Window:typeof _window = _window;
export const createOpenfinMiddleware:typeof middlewareCreator = middlewareCreator;