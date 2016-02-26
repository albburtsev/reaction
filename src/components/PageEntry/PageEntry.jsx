let b = block('page-entry');

import './PageEntry.styl';
import React from 'react';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={b}>
        <h1 className={b('title')}>Reaction</h1>
        <span className={b('addition')}>in action</span>
    </div>
;

export default PageEntry;
