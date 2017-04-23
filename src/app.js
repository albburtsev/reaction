import 'styl/app.styl';

import store from 'store';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import PageEntry from 'components/page/PageEntry/PageEntry';

let rootElement = document.querySelector('.app');

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <PageEntry />
        </HashRouter>
    </Provider>
), rootElement);
