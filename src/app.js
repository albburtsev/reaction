import 'styl/app.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from 'store';
import Root from 'components/Root/Root.jsx';
import PageEntryContainer from 'components/PageEntry/PageEntryContainer';

let rootElement = document.querySelector('.app'),
    basePath = global.basePath || '/';

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={basePath} component={Root}>
                <IndexRoute component={PageEntryContainer} />
            </Route>
        </Router>
    </Provider>
), rootElement);
