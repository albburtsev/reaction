import 'styl/app.styl';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

let rootElement = document.querySelector('.app'),
    basePath = global.basePath || '/';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path={basePath} component={Root}>
            <IndexRoute component={PageEntry} />
        </Route>
    </Router>
), rootElement);
