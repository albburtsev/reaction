import styles from './Button.styl';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export const BUTTON_TYPE_LINK = 'link';
export const BUTTON_TYPE_BUTTON = 'button';

const Button = ({children, type, to}) => {
    const content = <span className={styles.content}>{children}</span>;

    return type === BUTTON_TYPE_LINK
        ? <Link className={styles.button} to={to}>{content}</Link>
        : <button className={styles.button} type={type}>{content}</button>
    ;
};

Button.propTypes = {
    to: PropTypes.string,
    type: PropTypes.oneOf([
        BUTTON_TYPE_LINK,
        BUTTON_TYPE_BUTTON
    ])
};

Button.defaultProps = {
    type: BUTTON_TYPE_BUTTON
};

export default Button;
