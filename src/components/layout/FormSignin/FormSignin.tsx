import * as React from 'react';
import {PATH_SIGNUP} from '../../../paths';

import {Link} from 'react-router-dom';
import Input from '../../../components/common/Input/Input';
import Button, {ButtonPreset} from '../../../components/common/Button/Button';

import * as styles from './FormSignin.styl';

interface FormSigninProps {
    form: {
        login: string,
        password: string
    },
    onChange: React.EventHandler<React.FormEvent<EventTarget>>
}

const FormSignin: React.SFC<FormSigninProps> = ({form: {login, password}, onChange}) =>
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNUP}>Don't have an account? Sign up</Link>
        </p>
        <Input
            inputProps={{
                required: true,
                autoFocus: true,
                type: 'email',
                name: 'login',
                value: login,
                placeholder: 'Email'
            }}
            onChange={onChange}
        />
        <Input
            inputProps={{
                required: true,
                type: 'password',
                name: 'password',
                value: password,
                placeholder: 'Password'
            }}
            onChange={onChange}
        />
        <p className={styles.button}>
            <Button preset={ButtonPreset.Accent}>Sign in</Button>
        </p>
    </form>
;

export default FormSignin;
