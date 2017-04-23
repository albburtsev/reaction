import styles from './Button.styl';

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const BUTTON_PRESET_DEFAULT = 'default';
export const BUTTON_PRESET_ACCENT = 'accent';

const Button = ({preset, children}) =>
    <button className={cx(styles.button, styles[`button_preset_${preset}`])}>
        {children}
    </button>
;

Button.propTypes = {
    preset: PropTypes.string
};

Button.defaultProps = {
    preset: BUTTON_PRESET_DEFAULT
};

export default Button;
