import styles from './Logo.styl';

import React from 'react';
import {PATH_ENTRY} from 'paths';

/**
 * Primitive logo with react icon
 */
const Logo = () =>
    <span className={styles.logo} to={PATH_ENTRY} />
;

export default Logo;
