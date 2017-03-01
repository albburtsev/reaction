// import styles from './FormSignup.styl';

import React from 'react';
import {PATH_SIGNIN} from 'paths';

import {Link} from 'react-router';
import Button from 'components/common/Button/Button';

const FormSignup = () =>
    <form>
        <p>
            Already have an account?
            <Link to={PATH_SIGNIN}>Sign in</Link>
        </p>
        <Button>Sign up</Button>
    </form>
;

export default FormSignup;
