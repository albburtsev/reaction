import styles from './PageEntry.styl';

import {PATH_ENTRY} from 'paths';
import React from 'react';

import {Link} from 'react-router';
import Logo from 'components/common/Logo/Logo';
import FooterContainer from 'components/layout/Footer/FooterContainer';

/**
 * Entry page
 */
const PageEntry = ({children}) =>
    <div className={styles.page}>
        <div className={styles.content}>
            <Link className={styles.logo} to={PATH_ENTRY}>
                <Logo />
            </Link>
            {children}
        </div>
        <FooterContainer />
    </div>
;

export default PageEntry;
