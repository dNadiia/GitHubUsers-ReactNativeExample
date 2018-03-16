/**
 * Created by nadiia on 3/16/18.
 */

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {
    navMiddleware
} from '../containers/navigator/helper';
import createSagaMiddleware from 'redux-saga';
import {
    createLogger
} from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
    applyMiddleware(
        sagaMiddleware,
        navMiddleware,
        loggerMiddleware
    )
);

export default (initialState: Object) => {
    const store = createStore(reducers, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
}