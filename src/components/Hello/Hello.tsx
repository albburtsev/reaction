import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
    className: string;
}

class Hello extends React.PureComponent<HelloProps, {}> {
    render() {
        const {compiler, framework, className} = this.props;

        return (
            <footer className={className}>
                Btw, hello from {compiler} and {framework}!
            </footer>
        );
    }
}

export default Hello;
