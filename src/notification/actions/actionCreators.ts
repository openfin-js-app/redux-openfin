import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const createNotification:ActionCreator<Partial<types.CreateNotificationPayload>>
    =
createFSA<Partial<types.CreateNotificationPayload>>(
    actionTypes.CREATE_NOTIFICATION,
    (options:Partial<types.CreateNotificationPayload>) => <any>{options}
)