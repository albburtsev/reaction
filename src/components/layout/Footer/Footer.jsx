import styles from './Footer.styl';

import React, {PropTypes} from 'react';

/**
 * Footer with useless information
 */
const Footer = ({description, version}) =>
    <footer className={styles.footer}>
        {description}, v{version}
    </footer>
;

Footer.propTypes = {
    description: PropTypes.string,
    version: PropTypes.string
};

export default Footer;
