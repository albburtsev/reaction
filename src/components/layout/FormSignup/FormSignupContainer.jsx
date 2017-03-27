import {connect} from 'react-redux';
import FormSignup from './FormSignup';

import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signup}}) => ({
        form: signup
    }),
    (dispatch) => ({
        /**
         * Updates form fields value
         * @param {SyntheticEvent} e
         * @param {HTMLInputElement} e.target
         * @param {String} e.target.name
         * @param {String} e.target.value
         */
        onChange({target: {name, value}}) {
            dispatch(formsActions.update('signup', name, value));
        }
    }),
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignup);
