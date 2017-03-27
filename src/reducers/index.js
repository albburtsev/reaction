import {combineReducers} from 'redux';

import meta from 'ducks/metaDuck';
import forms from 'ducks/formsDuck';

export default combineReducers({
    meta,
    forms
});
