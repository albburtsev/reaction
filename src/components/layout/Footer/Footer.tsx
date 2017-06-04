import * as React from 'react';

import * as styles from './Footer.styl';

interface FooterProps {
    version: string,
    description: string
}

/**
 * Footer with useless information
 */
const Footer: React.SFC<FooterProps> = ({description, version}) =>
    <footer className={styles.footer}>
        {description}, v{version}
    </footer>
;

export default Footer;
