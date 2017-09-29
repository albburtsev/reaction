import { connect, Dispatch } from 'react-redux';
import FormSignin from './FormSignin';

import { IStore } from '../../../reducers';
import * as formsActions from '../../../ducks/formsDuck';

const mapStateToProps = ({ forms: { signin } }: IStore) => ({
    form: signin
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onChange({ target }: React.SyntheticEvent<EventTarget>) {
        const { name, value } = target as HTMLInputElement;
        dispatch(formsActions.update('signin', name, value));
    }
});

const FormSigninContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false } // @todo: waiting for immutable store
)(FormSignin);

export default FormSigninContainer as React.ComponentClass<any>;
