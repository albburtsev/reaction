import styles from './PageEntry.styl';

import {PATH_ENTRY} from 'paths';
import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import Logo from 'components/Logo/Logo.jsx';

/**
 * Entry page
 */
const PageEntry = ({name, description, version, children}) =>
    <div className={styles.page}>
        <Link className={styles.logo} to={PATH_ENTRY}>
            <Logo />
        </Link>
        <h1 className={styles.name}>{name}, v{version}</h1>
        <p className={styles.description}>{description}</p>
        {children}
    </div>
;

PageEntry.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    version: PropTypes.string
};

export default PageEntry;
