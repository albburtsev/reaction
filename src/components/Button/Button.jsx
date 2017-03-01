import styles from './Button.styl';

import React from 'react';

const Button = ({children}) =>
    <button className={styles.button}>
        <span className={styles.content}>{children}</span>
    </button>;

export default Button;
