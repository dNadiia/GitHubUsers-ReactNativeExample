/**
 * Created by nadiia on 3/16/18.
 */

import {
    fork,
    all
} from 'redux-saga/effects';
import usersSaga from '../containers/users/saga';
import followersSaga from '../containers/followers/saga';

type Saga = Iterable<*>;

export default function* rootSaga(): Saga {
    yield all([
        fork(usersSaga),
        fork(followersSaga)
    ]);
}