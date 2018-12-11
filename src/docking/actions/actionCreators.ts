import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../DockingType";
import * as actionTypes from "./actionTypes";

export const undockAllWindows:ActionCreator<types.UndockAllWindowsPayload> = createFSA<types.UndockAllWindowsPayload>(
    actionTypes.UNDOCK_ALL_WINDOWS,
    (options:types.UndockAllWindowsPayload) => options
)