# Redux openfin in typescript
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]


Redux openfin is a middleware to wrap openfin js api and support to communicate via redux actions

* Written in typescript
* Provide FLUX based apis
* Provide async based apis
* Provide cross-windows redux-action event bus

## Installation

```text
    npm i @albertli90/redux-openfin 
    or 
    yarn add @albertli90/redux-openfin
```

## Usage

sample configure store scripts

```typescript
    
    import { applyMiddleware, createStore, compose } from 'redux';
    import createSagaMiddleware from 'redux-saga';
    import { createOpenfinMiddleware } from '@albertli90/redux-openfin';
    import { ChannelType } from '@albertli90/redux-openfin/init';
    
    import rootReducer, {IRootState} from '../redux';
    import rootSaga from '../redux/sagas';
    
    declare const window:any;
    
    export default (
            channelType:ChannelType,
            channelClientId:string,
            sharedActions:string[],
            parentState?:IRootState
    )=>{
    
        const openfinMiddleware = createOpenfinMiddleware(window.fin,{
            channelType,channelClientId,sharedActions,
            channelRandomSuffix:process.env.NODE_ENV === 'development'
        });
        const sagaMiddleware = createSagaMiddleware();
        const devtools = window.devToolsExtension?window.devToolsExtension():(f:any):any => (f);
    
        const middleware = compose(
            applyMiddleware(
                sagaMiddleware,
                openfinMiddleware,
            ),
            devtools
        );
    
        const store = createStore(
            rootReducer(parentState),
            middleware,
        );
    
        sagaMiddleware.run(rootSaga);
    
        return store;
    
    }
```
sample index.tsx

```typescript jsx
    import * as shortid from 'shortid';
    import { ChannelType } from '@albertli90/redux-openfin/init';
    import configureStore from './utils/configureStore';
    
    import {
        CLIENT_SET_VALUE,
        applicationStarted,
        applicationChildStarted,
    } from "./redux";

    
    declare const window:any;
    
    // actions names to be shard across windows via event bus
    const sharedActions = [
        CLIENT_SET_VALUE
    ];

    
    if(window.store == null && window.opener == null){
        // parent window, thus create the store providing the channel via ChannelType.PROVIDER
        const store = configureStore(
            ChannelType.PROVIDER,
            "app-name-main-window",
            sharedActions,
        );
        window.store=store;
        store.dispatch(applicationStarted());
    }else{
        // child window, thus create the store consuming the channel provided by the parent via ChannelType.CLIENT
        const pathName = new URL(window.location.href).pathname;
        const childWindowIndex = pathName.indexOf('childWindow');
        let channelClientId = shortid.generate();
        if (childWindowIndex > -1){
            channelClientId = `app-name-${pathName.substring(childWindowIndex).replace('/','-')}`
        }
        const store = configureStore(
            ChannelType.CLIENT,
            channelClientId,
            sharedActions,
            window.opener.store.getState()
        );
        window.store=store;
        store.dispatch(applicationChildStarted());
    }
    
    ReactDOM.render(
        <Provider store = {window.store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );
```

## Sample api usage
```javascript
    
    function * someSagaGenerator(){
    
        // flux api sample
        yield put.resolve(System.actions.getMonitorInfo({}));
        monitorInfoAction = yield take(System.actions.GET_MONITOR_INFO_RES);
        
        //or 
        
        // async api sample
        monitorInfoAction = yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        
    }    

```

## Supporting apis:
*The author is lazy and he won't complete this section till next release* 

[LICENSE]: ./LICENSE.md
[CHANGELOG]: ./CHANGELOG.md

[version-badge]: https://img.shields.io/badge/version-0.20.10-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg