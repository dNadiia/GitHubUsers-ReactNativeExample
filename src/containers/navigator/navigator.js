/**
 * Created by nadiia on 3/16/18.
 */

import React, {
    Component
} from 'react';
import {
    addNavigationHelpers,
    StackNavigator
} from 'react-navigation';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import {
    addListener
} from './helper';

import Followers from '../followers';
import Users from '../users';

export const AppNavigator = StackNavigator({
    Users: {
        screen: Users
    },
    Followers: {
        screen: Followers
    },
}, {
    headerMode: 'none',
    initialRouteName: 'Users'
});

class AppWithNavigationState extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener,
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

export default connect(mapStateToProps)(AppWithNavigationState);