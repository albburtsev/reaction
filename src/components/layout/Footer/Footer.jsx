import styles from './Footer.styl';

import React from 'react';
import PropTypes from 'prop-types';

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
