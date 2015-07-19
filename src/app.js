import React from 'react';
import css from './app.styl'

import routes from 'routes';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

var config = (
    <Route handler={Root}>
        <DefaultRoute name={routes.ROUTE_ENTRY} handler={PageEntry} />
    </Route>
);

// @todo: use another container instead of document.body
let rootElement = document.body;

// Run our application with support of HTML5 History API
Router.run(config, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler />, rootElement, () => {
        // Put your redirects here
        // console.info(this.getCurrentPath());
    });
});
