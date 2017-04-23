import styles from './PageEntry.styl';

import React from 'react';
import * as paths from 'paths';

import Logo from 'components/common/Logo/Logo';
import {Link, Route, Switch} from 'react-router-dom';
import FooterContainer from 'components/layout/Footer/FooterContainer';
import FormSignupContainer from 'components/layout/FormSignup/FormSignupContainer';
import FormSigninContainer from 'components/layout/FormSignin/FormSigninContainer';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={styles.page}>
        <div className={styles.content}>
            <Link className={styles.logo} to={paths.PATH_ENTRY}>
                <Logo />
            </Link>
            <Switch>
                <Route path={paths.PATH_SIGNIN} component={FormSigninContainer} />
                <Route path={paths.PATH_SIGNUP} component={FormSignupContainer} />
                <Route component={FormSigninContainer} />
            </Switch>
        </div>
        <FooterContainer />
    </div>
;

export default PageEntry;
