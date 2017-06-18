import * as React from 'react';
import * as styles from './Logo.styl';

export interface LogoProps {};

/**
 * Primitive logo with react icon
 */
export class Logo extends React.Component<LogoProps, any> {
    render() {
        return (
            <span className={styles.logo} />
        );
    }
}

export default Logo;
