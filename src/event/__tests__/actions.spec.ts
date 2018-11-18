import EventActions from '../actions';

describe('Event actions',()=>{

    it('default snapshot',()=>{
        expect(EventActions).toMatchSnapshot();
    })

})