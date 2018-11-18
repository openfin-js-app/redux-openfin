import configureStore from 'redux-mock-store'
import * as Actions from '../actions/actionCreators';

const mockStore = configureStore();
const initialState = {};

const store = mockStore(initialState);

describe('Application pkg actions',()=>{

    describe('Request actions',()=>{

        it('close action',()=>{
            store.dispatch(Actions.close({force:true}));
            expect(store.getActions()).toMatchSnapshot();
        })

    });

});