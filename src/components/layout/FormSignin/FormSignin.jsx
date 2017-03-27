import styles from './FormSignin.styl';

import {PATH_SIGNUP} from 'paths';
import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import Button, {BUTTON_PRESET_ACCENT} from 'components/common/Button/Button';
import Input, {INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD} from 'components/common/Input/Input';

const FormSignin = ({form: {login, password}, onChange}) =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNUP}>Don't have an account? Sign up</Link>
        </p>
        <Input required
            autoFocus type={INPUT_TYPE_EMAIL} name="login" value={login} placeholder="Email"
            onChange={onChange}
        />
        <Input required
            type={INPUT_TYPE_PASSWORD} name="password" value={password} placeholder="Password"
            onChange={onChange}
        />
        <p className={styles.button}>
            <Button preset={BUTTON_PRESET_ACCENT}>Sign in</Button>
        </p>
    </form>
;

FormSignin.propTypes = {
    form: PropTypes.shape({
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default FormSignin;
