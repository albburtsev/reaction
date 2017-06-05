import {connect} from 'react-redux';
import FormSignin from './FormSignin';

import {Store} from 'reducers'
import * as formsActions from 'ducks/formsDuck';

export default connect(
    ({forms: {signin}}: Store) => ({
        form: signin
    }),
    (dispatch) => ({
        /**
         * Updates form fields value
         */
        onChange({target}: React.SyntheticEvent<EventTarget>) {
            const {name, value} = target as HTMLInputElement;
            dispatch(formsActions.update('signin', name, value));
        }
    }),
    null,
    {pure: false} // @todo: waiting for immutable store
)(FormSignin);
