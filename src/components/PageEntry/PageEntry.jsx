import styles from './PageEntry.styl';
import React from 'react';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={styles.page}>
        <h1 className={styles.title}>Reaction</h1>
        <span className={styles.addition}>in action</span>
    </div>
;

export default PageEntry;
