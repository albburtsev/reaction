import React from 'react';

// router and predefined routes
import routes from 'routes';
import {Router, Route, DefaultRoute, NotFoundRoute} from 'react-router';

// root component
import {Root} from 'components/Root/Root.jsx';

// page components
import PageEntry from 'components/PageEntry/PageEntry.jsx';

// all available routes
var config = (
    <Route handler={Root} path="/">
        <DefaultRoute name={routes.ROUTE_ENTRY} handler={PageEntry} />
        {/*
        <Route name={routes.ROUTE_SIGNIN} path="auth/signin" handler={PageSignin} />
        <NotFoundRoute handler={Page404} />
        */}
    </Route>
);

let rootElement = document.querySelector('.root');

Router.run(config, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler />, rootElement, () => {
        /**
         * Put your redirect here
         */

        console.info('Router', router.getCurrentPath());
    });
});
