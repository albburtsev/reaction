import './app.styl';

import {ROUTE_ENTRY} from 'routes';
import {Router, Route, Redirect} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';

import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

// @todo: use another container instead of document.body
let rootElement = document.body;

React.render((
    <Router history={history}>
        {/* @todo: waiting for IndexRoute: https://github.com/rackt/react-router/issues/1730#issuecomment-138986032 */}
        <Redirect from="/" to={ROUTE_ENTRY} />
        <Route path="/" component={Root}>
            <Route path={ROUTE_ENTRY} component={PageEntry} />
        </Route>
    </Router>
), rootElement);
