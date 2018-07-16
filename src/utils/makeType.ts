export const PREFIX:string = 'REDUX_OPENFIN';
export const DELIMITER:string = '::';

export default (type:string) => `${PREFIX}${DELIMITER}${type}`;