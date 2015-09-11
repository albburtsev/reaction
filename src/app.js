import './app.styl';

import {ROUTE_ENTRY} from 'routes';
import {Router, Route, Redirect} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';

import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

let rootElement = document.querySelector('.app');

ReactDOM.render((
    <Router history={history}>
        {/* @todo: waiting for IndexRoute: https://github.com/rackt/react-router/issues/1730#issuecomment-138986032 */}
        <Redirect from="/" to={ROUTE_ENTRY} />
        <Route path="/" component={Root}>
            <Route path={ROUTE_ENTRY} component={PageEntry} />
        </Route>
    </Router>
), rootElement);
