import {Action} from 'redux-actions';
import createFSA, {ActionCreator} from '../../utils/createFSA';
import * as types from "../DockingType";
import * as actionTypes from "./actionTypes";

export const undockAllWindowsRes:ActionCreator<types.UndockAllWindowsResPayload>
    = createFSA<types.UndockAllWindowsResPayload>(
        actionTypes.UNDOCK_ALL_WINDOWS_RES,
        (options:types.UndockAllWindowsResPayload) => options
)
