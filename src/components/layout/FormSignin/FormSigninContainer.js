import {connect} from 'react-redux';
import FormSignin from './FormSignin';

import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signin}}) => ({
        form: signin
    }),
    (dispatch) => ({
        /**
         * Updates form fiels value
         * @param {String} name
         * @param {String} value
         */
        onChange(name, value) {
            dispatch(formsActions.update(`signin.${name}`, value));
        }
    }),
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignin);
