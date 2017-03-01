import styles from './PageEntry.styl';

import {PATH_ENTRY} from 'paths';
import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import Logo from 'components/Logo/Logo';
import FooterContainer from 'components/Footer/FooterContainer';

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

PageEntry.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    version: PropTypes.string
};

export default PageEntry;
