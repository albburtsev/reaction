import {connect} from 'react-redux';
import FormSignup from './FormSignup';

import {Store} from 'reducers'
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signup}}: Store) => ({
        form: signup
    }),
    (dispatch) => ({
        /**
         * Updates form fields value
         */
        onChange({target}: React.SyntheticEvent<EventTarget>) {
            const {name, value} = target as HTMLInputElement;
            dispatch(formsActions.update('signup', name, value));
        }
    }),
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignup);
