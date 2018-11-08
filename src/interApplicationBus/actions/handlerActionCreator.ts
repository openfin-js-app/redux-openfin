import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const publishRes:ActionCreator<types.PublishResPayload> = createFSA<types.PublishResPayload>(
    actionTypes.PUBLISH_RES,
    (options:types.PublishResPayload) => <any>{options}
);

export const subscribeRes:ActionCreator<types.SubscribeResPayload> = createFSA<types.SubscribeResPayload>(
    actionTypes.SUBSCRIBE_RES,
    (options:types.SubscribeResPayload) => <any>{options}
);