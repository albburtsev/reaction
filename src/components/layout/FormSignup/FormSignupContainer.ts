import {connect, Dispatch} from 'react-redux';
import FormSignup from './FormSignup';

import {IStore} from '../../../reducers';
import * as formsActions from '../../../ducks/formsDuck';

const mapStateToProps = ({forms: {signup}}: IStore) => ({
    form: signup
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onChange({target}: React.SyntheticEvent<EventTarget>) {
        const {name, value} = target as HTMLInputElement;
        dispatch(formsActions.update('signup', name, value));
    }
});

const FormSignupContainer =  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignup);

export default FormSignupContainer as React.ComponentClass<any>;
