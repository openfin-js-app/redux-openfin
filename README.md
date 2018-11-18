# Redux openfin in typescript
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]


Redux openfin is a middleware to wrap openfin js api and support to communicate via redux actions

* Written in typescript

# Supporting apis:
* The author is lazy and he will leave this section till next release to finish*

```javascript
    
    function * someSagaGenerator(){
    
        yield put.resolve(System.actions.getMonitorInfo({}));
        monitorInfoAction = yield take(System.actions.GET_MONITOR_INFO_RES);
        
        //or 
        
        monitorInfoAction = yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        
    }
    

```

[LICENSE]: ./LICENSE.md
[CHANGELOG]: ./CHANGELOG.md

[version-badge]: https://img.shields.io/badge/version-0.10.5-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg