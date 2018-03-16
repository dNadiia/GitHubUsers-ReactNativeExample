/**
 * Created by nadiia on 3/16/18.
 */

import {
    createAction
} from '../../utils/actionCreator';

export const NAV_FOLLOWERS = 'NAV_FOLLOWERS';

export function actionNavFollowers(user) {
    return createAction(NAV_FOLLOWERS, {user});
}

export function actionNavBack() {
    return createAction('Navigation/BACK');
}
