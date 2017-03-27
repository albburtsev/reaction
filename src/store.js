import reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

export default createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));
