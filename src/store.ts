import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {createStore as createReduxStore, applyMiddleware} from 'redux';

const {composeWithDevTools} = require('redux-devtools-extension/developmentOnly');

export const createStore = () =>
    createReduxStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware)
        )
    );

export default createStore();
