let b = block('page-entry');

import './PageEntry.styl';
import {Component, PropTypes} from 'react';

import LeafletMap from 'samples/LeafletMap/LeafletMap.jsx';

/**
 * Entry point of our application
 */
class PageEntry extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    render() {
        return (
            <div className={b}>
                <h1 className={b('title')}>Entry page</h1>
                <LeafletMap />
            </div>
        );
    }
}

export default PageEntry;
