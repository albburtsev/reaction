import * as React from 'react';

import * as styles from './Footer.styl';

interface IFooterProps {
    version: string;
    description: string;
}

/**
 * Footer with useless information
 */
const Footer = ({ description, version }: IFooterProps) => (
    <footer className={styles.footer}>
        <a className={styles.githubLink} href="https://github.com/albburtsev/reaction" />
        {description}, v{version}
    </footer>
);

export default Footer;
