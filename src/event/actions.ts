import {EventConstant, appEvents, windowEvents} from './constants';

export type ActionDict = {
    [name:string]:EventConstant,
}

const appEventDictByName:ActionDict = {};
const appEventDictByType:ActionDict = {};
const windowEventDictByName:ActionDict = {};
const windowEventDictByType:ActionDict = {};

appEvents.forEach(oneEvent => {
    appEventDictByName[oneEvent.name] = oneEvent;
    appEventDictByType[oneEvent.type] = oneEvent;
});

windowEvents.forEach(oneEvent => {
    windowEventDictByName[oneEvent.name] = oneEvent;
    windowEventDictByType[oneEvent.type] = oneEvent;
});

export default {
    appEventDictByName,
    appEventDictByType,
    windowEventDictByName,
    windowEventDictByType,
};