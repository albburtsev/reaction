import * as React from 'react';
import * as styles from './Logo.styl';

export interface ILogoProps {}

/**
 * Primitive logo with react icon
 */
export class Logo extends React.Component<ILogoProps, any> {
    render() {
        return (
            <span className={styles.logo} />
        );
    }
}

export default Logo;
