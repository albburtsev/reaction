import styles from './Root.styl';
import React from 'react';

/**
 * Top-level container
 */
const Root = ({children}) =>
    <div className={styles.root}>
        {children}
    </div>
;

export default Root;
