/**
 * Created by nadiia on 3/16/18.
 */

import React, {
    Component
} from 'react';
import {
    Provider
} from 'react-redux';
import {
    StyleProvider
} from 'native-base';
import getTheme from '../native-base-theme/components/index';
import platform from '../native-base-theme/variables/platform';
import configureStore from './store';
import AppWithNavigationState from './containers/navigator';

const store = configureStore();

export default class App extends Component<{}> {

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Provider store={store}>
                    <AppWithNavigationState/>
                </Provider>
            </StyleProvider>
        );
    }
}
