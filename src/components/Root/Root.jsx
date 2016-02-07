import React, {Component} from 'react';

/**
 * Wrapper component for all pages
 */
class Root extends Component {
    render() {
        return (
            <div className="root">
                {this.props.children}
            </div>
        );
    }
}

export default Root;
