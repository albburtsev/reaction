import styles from './PageEntry.styl';
import React, {PropTypes} from 'react';

import Hello from 'components/Hello/Hello.tsx';
import Button, {BUTTON_TYPE_LINK} from 'components/Button/Button.jsx';

/**
 * Entry page
 */
const PageEntry = ({name, description, version}) =>
    <div className={styles.page}>
        <h1 className={styles.name}>{name}, v{version}</h1>
        <p className={styles.description}>{description}</p>
        <Hello className={styles.description} compiler="TypeScript" />
        <div>
            <Button type={BUTTON_TYPE_LINK} to="/signin">Sign in</Button>
            <Button type={BUTTON_TYPE_LINK} to="/signup">Sign up</Button>
        </div>
    </div>
;

PageEntry.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    version: PropTypes.string
};

export default PageEntry;
