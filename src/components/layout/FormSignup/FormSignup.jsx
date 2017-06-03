import styles from './FormSignup.styl';

import React from 'react';
import {PATH_SIGNIN} from 'paths';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Button, {ButtonPreset} from 'components/common/Button/Button';
import Input, {INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD} from 'components/common/Input/Input';

const FormSignup = ({form: {name, login, password}, onChange}) =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNIN}>Already have an account? Sign in</Link>
        </p>
        <Input required autoFocus
            name="name" value={name} placeholder="Name, e.g. John Smith"
            onChange={onChange}
        />
        <Input required
            type={INPUT_TYPE_EMAIL} name="login" value={login} placeholder="Email"
            onChange={onChange}
        />
        <Input required
            type={INPUT_TYPE_PASSWORD} name="password" value={password} placeholder="Password"
            onChange={onChange}
        />
        <p className={styles.button}>
            <Button preset={ButtonPreset.Accent}>Sign up</Button>
        </p>
    </form>
;

FormSignup.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default FormSignup;
