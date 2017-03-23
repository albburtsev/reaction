import styles from './FormSignup.styl';

import React from 'react';
import {PATH_SIGNIN} from 'paths';

import {Link} from 'react-router';
import Button, {BUTTON_PRESET_ACCENT} from 'components/common/Button/Button';
import Input, {INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD} from 'components/common/Input/Input';

const FormSignup = () =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNIN}>Already have an account? Sign in</Link>
        </p>
        <Input required autoFocus name="name" placeholder="Name, e.g. John Smith" />
        <Input required type={INPUT_TYPE_EMAIL} name="login" placeholder="Email" />
        <Input required type={INPUT_TYPE_PASSWORD} name="password" placeholder="Password" />
        <p className={styles.button}>
            <Button preset={BUTTON_PRESET_ACCENT}>Sign up</Button>
        </p>
    </form>
;

export default FormSignup;
