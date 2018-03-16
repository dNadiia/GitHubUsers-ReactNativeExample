/**
 * Created by nadiia on 3/16/18.
 */

import {
    uniqBy
} from 'lodash';
import {
    GET_USERS_SUCCESS
} from './actions';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS_SUCCESS:
            return payload.since === 0 ? payload.data : uniqBy([...state, ...payload.data], 'id');
        default:
            return state;
    }
}