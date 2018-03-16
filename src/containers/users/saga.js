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
    GET_USERS_FAILURE,
    GET_USERS_SUCCESS,
    GET_USERS
} from './actions';
import {
    apiCall
} from '../../utils';

function* getUsers({payload}) {
    const {since, perPage} = payload;
    try {
        const response = yield call(apiCall, {method: 'GET', path: `users?since=${since}&per_page=${perPage}`});
        yield put({type: 'GET_USERS_SUCCESS', payload: {data: response, since}});
    } catch (e) {
        yield put({type: 'GET_USERS_FAILURE', e});
    }
}

export function* watchGetUsers() {
    yield takeEvery('GET_USERS', getUsers);
}

export default function*(): Iterable {
    yield all([
        fork(watchGetUsers)
    ]);
}