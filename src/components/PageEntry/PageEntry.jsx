import styles from './PageEntry.styl';
import React, {PropTypes} from 'react';

/**
 * Entry page
 */
const PageEntry = ({name, description, version, children}) =>
    <div className={styles.page}>
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
