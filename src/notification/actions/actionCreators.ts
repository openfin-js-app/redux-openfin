import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const createNotification:ActionCreator<types.CreateNotificationPayload>
    =
    createFSA<types.CreateNotificationPayload>(
        actionTypes.CREATE_NOTIFICATION,
        (options:Partial<types.CreateNotificationPayload>) => <any>(options)
    )


export const getCurrent:ActionCreator<types.NotificationGetCurrentPayload>
    =
    createFSA<types.NotificationGetCurrentPayload>(
        actionTypes.NOTIFICATION_GET_CURRENT,
        (options:Partial<types.NotificationGetCurrentPayload>) => <any>(options)
    )

export const close:ActionCreator<types.NotificationClosePayload>
    =
    createFSA<types.NotificationClosePayload>(
        actionTypes.NOTIFICATION_CLOSE,
        (options:Partial<types.NotificationClosePayload>) => <any>(options)
    )

export const sendMessage:ActionCreator<types.NotificationSendMsgPayload>
    =
    createFSA<types.NotificationSendMsgPayload>(
        actionTypes.NOTIFICATION_SEND_MSG,
        (options:Partial<types.NotificationSendMsgPayload>) => <any>(options)
    )

export const sendMessageToApplication:ActionCreator<types.NotificationSendMsgToAppPayload>
    =
    createFSA<types.NotificationSendMsgToAppPayload>(
        actionTypes.NOTIFICATION_SEND_MSG_TO_APP,
        (options:Partial<types.NotificationSendMsgToAppPayload>) => <any>(options)
    )

