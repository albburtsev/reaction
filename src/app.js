import 'styl/app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from 'store';
import * as paths from 'paths';

import Root from 'components/Root/Root.jsx';
import PageSignin from 'components/PageSignin/PageSignin.jsx';
import PageSignup from 'components/PageSignup/PageSignup.jsx';
import PageEntryContainer from 'components/PageEntry/PageEntryContainer';

let rootElement = document.querySelector('.app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={paths.PATH_ENTRY} component={Root}>
                <IndexRoute component={PageEntryContainer} />
                <Route path={paths.PATH_SIGNIN} component={PageSignin} />
                <Route path={paths.PATH_SIGNUP} component={PageSignup} />
            </Route>
        </Router>
    </Provider>
), rootElement);
