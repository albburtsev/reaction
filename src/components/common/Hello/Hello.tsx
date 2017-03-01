import * as React from 'react';

export interface HelloProps {
    compiler: string;
    className: string;
}

class Hello extends React.PureComponent<HelloProps, {}> {
    render() {
        const {compiler, className} = this.props;

        return (
            <footer className={className}>
                Btw, hello from {compiler}!
            </footer>
        );
    }
}

export default Hello;
