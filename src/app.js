import 'styl/app.styl';

import {createHistory} from 'history';
import {Router, Route, IndexRoute} from 'react-router';

import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

let rootElement = document.querySelector('.app'),
    basePath = global.basePath || '/',
    history = createHistory();

ReactDOM.render((
    <Router history={history}>
        <Route path={basePath} component={Root}>
            <IndexRoute component={PageEntry} />
        </Route>
    </Router>
), rootElement);
