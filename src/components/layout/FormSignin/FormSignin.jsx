import styles from './FormSignin.styl';

import React from 'react';
import {PATH_SIGNUP} from 'paths';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Input from 'components/common/Input/Input';
import Button, {ButtonPreset} from 'components/common/Button/Button';

const FormSignin = ({form: {login, password}, onChange}) =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNUP}>Don't have an account? Sign up</Link>
        </p>
        <Input required
            autoFocus type="email" name="login" value={login} placeholder="Email"
            onChange={onChange}
        />
        <Input required
            type="password" name="password" value={password} placeholder="Password"
            onChange={onChange}
        />
        <p className={styles.button}>
            <Button preset={ButtonPreset.Accent}>Sign in</Button>
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
