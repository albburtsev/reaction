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
        <Hello className={styles.addition} compiler="TypeScript" />
    </div>
;

export default PageEntry;
