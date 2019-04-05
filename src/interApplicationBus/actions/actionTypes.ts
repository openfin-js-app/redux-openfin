import { makeReqType, makeResType } from '../../utils/makeType';

export const PUBLISH = makeReqType('PUBLISH');
export const PUBLISH_RES = makeResType('PUBLISH_RES');

export const SUBSCRIBE = makeReqType('SUBSCRIBE');
export const SUBSCRIBE_RES = makeResType('SUBSCRIBE_RES');
