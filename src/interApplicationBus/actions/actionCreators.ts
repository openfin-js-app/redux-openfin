import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const publish:ActionCreator<types.PublishPayload> = createFSA<types.PublishPayload>(
        actionTypes.PUBLISH,
        (options:types.PublishPayload) => <any>{options}
);

export const subscribe:ActionCreator<types.SubscribePayload> = createFSA<types.SubscribePayload>(
        actionTypes.SUBSCRIBE,
        (options:types.SubscribePayload) => <any>{options}
);