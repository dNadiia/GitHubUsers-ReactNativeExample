/**
 * Created by nadiia on 3/16/18.
 */

import {
    GET_FOLLOWERS_SUCCESS,
    RESET_FOLLOWERS
} from './actions';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_FOLLOWERS_SUCCESS:
            return payload;
        case RESET_FOLLOWERS:
            return initialState;
        default:
            return state;
    }
}