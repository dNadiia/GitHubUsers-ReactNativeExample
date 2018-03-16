/**
 * Created by nadiia on 3/16/18.
 */

import {
    takeEvery,
    call,
    fork,
    put,
    all
} from 'redux-saga/effects';
import {
    GET_FOLLOWERS_FAILURE,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS
} from './actions';
import {
    apiCall
} from '../../utils';

function* getFollowers({payload}) {
    const {login} = payload;
    try {
        const response = yield call(apiCall, {method: 'GET', path: `users/${login}/followers`});
        yield put({type: 'GET_FOLLOWERS_SUCCESS', payload: response});
    } catch (e) {
        yield put({type: 'GET_FOLLOWERS_FAILURE', e});
    }
}

export function* watchGetFollowers() {
    yield takeEvery('GET_FOLLOWERS', getFollowers);
}

export default function*(): Iterable {
    yield all([
        fork(watchGetFollowers)
    ]);
}