import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * Wrapper component for all pages
 */
var Root = React.createClass({
    render() {
        return (
            <div className="root">
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

export default Root;
