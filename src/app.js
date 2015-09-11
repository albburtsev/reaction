import './app.styl';

import {createHistory} from 'history';
import {Router, Route, IndexRoute} from 'react-router';

import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

let rootElement = document.querySelector('.app'),
    history = createHistory();

ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={Root}>
            <IndexRoute component={PageEntry} />
        </Route>
    </Router>
), rootElement);
