import {
    IInitState,
} from "../init";

export const initState:IInitState ={
    fin:{},
    store:{
        dispatch:jest.fn(),
        getState:()=>({}),
        subscribe:jest.fn(),
        replaceReducer:jest.fn(),
    },
    channel:null,
    config:null,
    currentWindow:null,
};