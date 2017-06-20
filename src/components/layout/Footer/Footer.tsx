import * as React from 'react';

import * as styles from './Footer.styl';

interface IFooterProps {
    version: string;
    description: string;
}

/**
 * Footer with useless information
 */
const Footer = ({description, version}: IFooterProps) =>
    <footer className={styles.footer}>
        {description}, v{version}
    </footer>
;

export default Footer;
