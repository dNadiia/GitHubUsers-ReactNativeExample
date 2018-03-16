/**
 * Created by nadiia on 3/16/18.
 */

import {
    combineReducers
} from 'redux';

import nav from '../containers/navigator/reducer';
import users from '../containers/users/reducer';
import followers from '../containers/followers/reducer';

export default combineReducers({
    nav,
    users,
    followers
});