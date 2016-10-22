import styles from './PageEntry.styl';
import React from 'react';

import Hello from 'components/Hello/Hello.tsx';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={styles.page}>
        <h1 className={styles.title}>Reaction</h1>
        <p className={styles.addition}>in action</p>
        <Hello className={123} compiler="TypeScript" framework="React" />
    </div>
;

export default PageEntry;
