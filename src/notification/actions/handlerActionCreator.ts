import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const createNotificationRes:ActionCreator<types.CreateNotificationResPayload> = createFSA<types.CreateNotificationResPayload>(
    actionTypes.CREATE_NOTIFICATION_RES,
    (options:types.CreateNotificationResPayload) => <any>(options)
)