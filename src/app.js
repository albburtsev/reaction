import 'styl/app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from 'store';
import * as paths from 'paths';

import PageEntry from 'components/page/PageEntry/PageEntry';
import FormSignin from 'components/layout/FormSignin/FormSignin';
import FormSignup from 'components/layout/FormSignup/FormSignup';

let rootElement = document.querySelector('.app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path={paths.PATH_ENTRY} component={PageEntry}>
                <IndexRoute component={FormSignin} />
                <Route path={paths.PATH_SIGNIN} component={FormSignin} />
                <Route path={paths.PATH_SIGNUP} component={FormSignup} />
            </Route>
        </Router>
    </Provider>
), rootElement);
