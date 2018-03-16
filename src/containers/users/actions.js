/**
 * Created by nadiia on 3/16/18.
 */

import {
    createAction
} from '../../utils';

export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS = 'GET_USERS';

export function actionGetUsers(since, perPage) {
    return createAction(GET_USERS, {since: since, perPage: perPage});
}