import {connect} from 'react-redux';
import FormSignin from './FormSignin';

import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signin}}) => ({
        form: signin
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
            dispatch(formsActions.update('signin', name, value));
        }
    }),
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignin);
