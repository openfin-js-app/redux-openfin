import { initState } from '../init';

import {FinWindow, LegacyFinWindow} from '../GlobalTypes';


export default function(win:FinWindow):LegacyFinWindow{
    if (initState.fin){
        return initState.fin.desktop.wrap(initState.config.finUuid,win.name)
    }else{
        throw '[redux-openfin] fin is not injected'
    }
}