import 'styl/app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from 'store';
import * as paths from 'paths';

import PageEntry from 'components/page/PageEntry/PageEntry';
import FormSignupContainer from 'components/layout/FormSignup/FormSignupContainer';
import FormSigninContainer from 'components/layout/FormSignin/FormSigninContainer';

let rootElement = document.querySelector('.app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path={paths.PATH_ENTRY} component={PageEntry}>
                <IndexRoute component={FormSigninContainer} />
                <Route path={paths.PATH_SIGNIN} component={FormSigninContainer} />
                <Route path={paths.PATH_SIGNUP} component={FormSignupContainer} />
            </Route>
        </Router>
    </Provider>
), rootElement);
