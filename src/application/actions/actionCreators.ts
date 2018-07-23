import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const newApplication:ActionCreator<types.NewApplicationPayload> = createFSA<types.NewApplicationPayload>(
    actionTypes.NEW_APPLICATION,
    (options:types.NewApplicationPayload) => <any> options
);

export const restart:ActionCreator<types.RestartPayload> = createFSA<types.RestartPayload>(
    actionTypes.RESTART,
    (options:types.RestartPayload) => <any> options
);

export const close:ActionCreator<types.ClosePayload> = createFSA<types.ClosePayload>(
    actionTypes.CLOSE,
    (options:types.ClosePayload) => <any> options
);
