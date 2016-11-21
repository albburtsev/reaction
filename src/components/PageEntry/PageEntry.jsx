import styles from './PageEntry.styl';
import React, {PropTypes} from 'react';

import Hello from 'components/Hello/Hello.tsx';

/**
 * Entry page
 */
const PageEntry = ({name, description, version}) =>
    <div className={styles.page}>
        <h1 className={styles.name}>{name}, v{version}</h1>
        <p className={styles.description}>{description}</p>
        <Hello className={styles.description} compiler="TypeScript" />
    </div>
;

PageEntry.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    version: PropTypes.string
};

export default PageEntry;
