import {
    ChannelType, IConfig, IInitState,
} from "../init";

export const initState:IInitState ={
    fin:{},
    store:{
        dispatch:jest.fn(),
        getState:()=>({}),
        subscribe:jest.fn(),
        replaceReducer:jest.fn(),
    },
};