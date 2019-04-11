# Redux Openfin
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]
[![Build Status](https://travis-ci.com/openfin-js-app/redux-openfin.svg?branch=master)](https://travis-ci.com/openfin-js-app/redux-openfin)
[![Coverage Status](https://coveralls.io/repos/github/openfin-js-app/redux-openfin/badge.svg?branch=master)](https://coveralls.io/github/openfin-js-app/redux-openfin?branch=master)


Redux openfin is a wrapper allowing to call openfin js api via redux actions. 

* All in typescript
* Provide FLUX based apis
* Provide async based apis
* Provide cross-windows redux-action event bus
* Provide snap-dock features

![](https://albertleigh.github.io/openfin-react-latest/img/screenshoot.gif)

## Installation

```text
    npm i redux-openfin 
    or 
    yarn add redux-openfin
```

## Usage

sample configure store scripts

```typescript
    import { applyMiddleware, createStore, compose } from 'redux';
    import createSagaMiddleware from 'redux-saga';
    import { createOpenfinMiddleware } from 'redux-openfin';
    
    import rootReducer, {IRootState} from '../reduxs';
    import rootSaga from '../reduxs/sagas';
    
    declare const window:any;
    
    export default (
            sharedActions:string[],
            parentState?:IRootState
    )=>{
    
        const openfinMiddleware = createOpenfinMiddleware(window.fin,{
            finUuid:process.env.REACT_APP_FIN_UUID,
            sharedActions,
            // channelRandomSuffix:process.env.NODE_ENV === 'development',
            autoDocking:process.env.REACT_APP_ENABLE_AUTO_DOCKING === 'true',
            dockingOptions:{
            }
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

    
    if(window.name === process.env.REACT_APP_FIN_UUID){
        const store = configureStore(
            sharedActions,
        );
        window.store=store;
        store.dispatch(applicationStarted());
    }else{
        const store = configureStore(
            sharedActions,
            window.opener.store.getState()
        );
        window.store=store;
        store.dispatch(applicationChildStarted());
    }
    setPlatformClass(document.body,window.navigator.platform);
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

[version-badge]: https://img.shields.io/badge/version-0.70.20-green.svg
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg