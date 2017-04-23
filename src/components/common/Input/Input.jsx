import styles from './Input.styl';

import React from 'react';
import PropTypes from 'prop-types';

export const INPUT_TYPE_TEXT = 'text';
export const INPUT_TYPE_EMAIL = 'email';
export const INPUT_TYPE_PASSWORD = 'password';

/**
 * Primitive logo with react icon
 */
const Input = (props) => {
    return (
        <label className={styles.label}>
            <input className={styles.input} {...props} />
        </label>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf([
        INPUT_TYPE_TEXT,
        INPUT_TYPE_EMAIL,
        INPUT_TYPE_PASSWORD
    ]),
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool
};

Input.defaultProps = {
    type: INPUT_TYPE_TEXT
};

export default Input;
