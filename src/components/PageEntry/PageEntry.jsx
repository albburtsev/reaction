var b = Block('page-entry');

import './PageEntry.styl';

/**
 * Entry point of our application
 */
var PageEntry = React.createClass({
    render() {
        return (
            <div className={b}>
                <h1 className={b('title')}>Entry page</h1>
            </div>
        );
    }
});

export default PageEntry;
