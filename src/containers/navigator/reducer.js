/**
 * Created by nadiia on 3/16/18.
 */

import {
    NavigationActions
} from 'react-navigation';
import {
    NAV_FOLLOWERS
} from './actions';
import {
    AppNavigator
} from './navigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Users');
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction
);

export default function (state = initialNavState, action) {
    const { type, payload } = action;
    let nextState;
    switch (type) {
        case NAV_FOLLOWERS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Followers', params: payload}),
                state
            );
            break;
        case 'Navigation/BACK':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}
