/**
 * Created by nadiia on 3/16/18.
 */

import {
    createAction
} from '../../utils';

export const GET_FOLLOWERS_FAILURE = 'GET_FOLLOWERS_FAILURE';
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const RESET_FOLLOWERS = 'RESET_FOLLOWERS';
export const GET_FOLLOWERS = 'GET_FOLLOWERS';

export function actionGetFollowers(login) {
    return createAction(GET_FOLLOWERS, {login});
}

export function actionResetFollowers() {
    return createAction(RESET_FOLLOWERS);
}