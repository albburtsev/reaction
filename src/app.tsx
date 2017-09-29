import 'styl/app.styl';

import store from './store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import PageEntry from './components/page/PageEntry/PageEntry';

const rootElement = document.querySelector('.app');

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <PageEntry />
        </HashRouter>
    </Provider>,
    rootElement
);
