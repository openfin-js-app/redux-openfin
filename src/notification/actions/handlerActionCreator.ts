import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from "../../utils/createFSA";
import * as types from "../types";
import * as actionTypes from "./actionTypes";

export const createNotificationRes:ActionCreator<types.CreateNotificationResPayload> = createFSA<types.CreateNotificationResPayload>(
    actionTypes.CREATE_NOTIFICATION_RES,
    (options:types.CreateNotificationResPayload) => <any>(options)
)


export const getCurrentRes:ActionCreator<types.NotificationGetCurrentResPayload>
    =
    createFSA<types.NotificationGetCurrentResPayload>(
        actionTypes.NOTIFICATION_GET_CURRENT_RES,
        (options:Partial<types.NotificationGetCurrentResPayload>) => <any>(options)
    )

export const closeRes:ActionCreator<types.NotificationCloseResPayload>
    =
    createFSA<types.NotificationCloseResPayload>(
        actionTypes.NOTIFICATION_CLOSE_RES,
        (options:Partial<types.NotificationCloseResPayload>) => <any>(options)
    )

export const sendMessageRes:ActionCreator<types.NotificationSendMsgResPayload>
    =
    createFSA<types.NotificationSendMsgResPayload>(
        actionTypes.NOTIFICATION_SEND_MSG_RES,
        (options:Partial<types.NotificationSendMsgResPayload>) => <any>(options)
    )

export const sendMessageToApplicationRes:ActionCreator<types.NotificationSendMsgToAppResPayload>
    =
    createFSA<types.NotificationSendMsgToAppResPayload>(
        actionTypes.NOTIFICATION_SEND_MSG_TO_APP_RES,
        (options:Partial<types.NotificationSendMsgToAppResPayload>) => <any>(options)
    )




// ----------------------notification events
// http://cdn.openfin.co/jsdocs/beta/fin.Notification.html#~onClick
// http://cdn.openfin.co/jsdocs/beta/fin.Notification.html#~onClose
// http://cdn.openfin.co/jsdocs/beta/fin.Notification.html#~onDismiss
// http://cdn.openfin.co/jsdocs/beta/global.html#errorCallback
// http://cdn.openfin.co/jsdocs/beta/fin.Notification.html#~onMessage
// http://cdn.openfin.co/jsdocs/beta/fin.Notification.html#~onShow

export const notificationOnClickRes:ActionCreator<types.NotificationOnClickResPayload> = createFSA<types.NotificationOnClickResPayload>(
    actionTypes.NOTIFICATION_ON_CLICK_RES,
    (options:types.NotificationOnClickResPayload) => <any>(options)
)
export const notificationOnCloseRes:ActionCreator<types.NotificationOnCloseResPayload> = createFSA<types.NotificationOnCloseResPayload>(
    actionTypes.NOTIFICATION_ON_CLOSE_RES,
    (options:types.NotificationOnCloseResPayload) => <any>(options)
)
export const notificationOnDismissRes:ActionCreator<types.NotificationOnDismissResPayload> = createFSA<types.NotificationOnDismissResPayload>(
    actionTypes.NOTIFICATION_ON_DISMISS_RES,
    (options:types.NotificationOnDismissResPayload) => <any>(options)
)
export const notificationOnErrorRes:ActionCreator<types.NotificationOnErrorResPayload> = createFSA<types.NotificationOnErrorResPayload>(
    actionTypes.NOTIFICATION_ON_ERROR_RES,
    (options:types.NotificationOnErrorResPayload) => <any>(options)
)
export const notificationOnMsgRes:ActionCreator<types.NotificationOnMsgResPayload> = createFSA<types.NotificationOnMsgResPayload>(
    actionTypes.NOTIFICATION_ON_MSG_RES,
    (options:types.NotificationOnMsgResPayload) => <any>(options)
)
export const notificationOnShowRes:ActionCreator<types.NotificationOnShowResPayload> = createFSA<types.NotificationOnShowResPayload>(
    actionTypes.NOTIFICATION_ON_SHOW_RES,
    (options:types.NotificationOnShowResPayload) => <any>(options)
)
