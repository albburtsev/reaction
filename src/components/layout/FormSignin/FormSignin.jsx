// import styles from './FormSignin.styl';

import React from 'react';
import {PATH_SIGNUP} from 'paths';

import {Link} from 'react-router';
import Button from 'components/common/Button/Button';
import Input, {INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD} from 'components/common/Input';

const FormSignin = () =>
    <form>
        <Input type={INPUT_TYPE_EMAIL} name="login" required autoFocus />
        <Input type={INPUT_TYPE_PASSWORD} name="password" required />
        <p>
            Don't have an account?
            <Link to={PATH_SIGNUP}>Sign up</Link>
        </p>
        <Button>Sign in</Button>
    </form>
;

export default FormSignin;
