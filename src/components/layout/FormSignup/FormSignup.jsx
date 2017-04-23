import styles from './FormSignup.styl';

import {PATH_SIGNIN} from 'paths';
import React, {PropTypes} from 'react';

import {Link} from 'react-router-dom';
import Button, {BUTTON_PRESET_ACCENT} from 'components/common/Button/Button';
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
            <Button preset={BUTTON_PRESET_ACCENT}>Sign up</Button>
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
