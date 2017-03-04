import styles from './FormSignin.styl';

import React from 'react';
import {PATH_SIGNUP} from 'paths';

import {Link} from 'react-router';
import Button, {BUTTON_PRESET_ACCENT} from 'components/common/Button/Button';
import Input, {INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD} from 'components/common/Input';

const FormSignin = () =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNUP}>Don't have an account? Sign up</Link>
        </p>
        <Input type={INPUT_TYPE_EMAIL} name="login" required autoFocus />
        <Input type={INPUT_TYPE_PASSWORD} name="password" required />
        <p className={styles.button}>
            <Button preset={BUTTON_PRESET_ACCENT}>Sign in</Button>
        </p>
    </form>
;

export default FormSignin;
