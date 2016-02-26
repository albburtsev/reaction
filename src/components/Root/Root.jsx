let b = block('root');

import './Root.styl';
import React from 'react';

/**
 * Top-level container
 */
const Root = ({children}) =>
    <div className={b}>{children}</div>
;

export default Root;
