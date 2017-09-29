import * as styles from './FormSignup.styl';

import * as React from 'react';
import { PATH_SIGNIN } from '../../../paths';

import { Link } from 'react-router-dom';
import Input from '../../../components/common/Input/Input';
import Button, { ButtonPreset } from '../../../components/common/Button/Button';

interface IFormSignupProps {
    form: {
        name: string;
        login: string;
        password: string;
    };
    onChange: React.EventHandler<React.FormEvent<EventTarget>>;
}

const FormSignup: React.SFC<IFormSignupProps> = ({ form: { name, login, password }, onChange }) => (
    <form>
        <p className={styles.hint}>
            <Link to={PATH_SIGNIN}>Already have an account? Sign in</Link>
        </p>
        <Input
            inputProps={{
                required: true,
                autoFocus: true,
                name: 'name',
                value: name,
                placeholder: 'Name, e.g. John Smith'
            }}
            onChange={onChange}
        />
        <Input
            inputProps={{
                required: true,
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
            <Button preset={ButtonPreset.Accent}>Sign up</Button>
        </p>
    </form>
);

export default FormSignup;
