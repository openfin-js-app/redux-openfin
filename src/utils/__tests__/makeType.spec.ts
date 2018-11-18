import makeType from '../makeType';

describe('makeType utils',()=>{
    it('works by default',()=>{
        expect(makeType('SAMPLE_ACTION_NAME')).toMatchSnapshot();
    })
});