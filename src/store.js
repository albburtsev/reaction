import reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import {createStore as createReduxStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

export const createStore = () =>
    createReduxStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware)
        )
    );

export default createStore();
