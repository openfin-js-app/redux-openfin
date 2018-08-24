import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const newApplicationRes:ActionCreator<types.NewApplicationResPayload> = createFSA<types.NewApplicationResPayload>(
    actionTypes.NEW_APPLICATION_RES,
    (options:types.NewApplicationResPayload) => <any> options
);

export const restartRes:ActionCreator<types.RestartResPayload> = createFSA<types.RestartResPayload>(
    actionTypes.RESTART_RES,
    (options:types.RestartResPayload) => <any> options
);

export const closeRes:ActionCreator<types.CloseResPayload> = createFSA<types.CloseResPayload>(
    actionTypes.CLOSE_RES,
    (options:types.CloseResPayload) => <any> options
);

