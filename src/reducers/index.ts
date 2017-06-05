import {combineReducers} from 'redux';

import meta, {MetaStore} from 'ducks/metaDuck';
import forms, {FormsStore} from 'ducks/formsDuck';

export interface Store {
    meta: MetaStore,
    forms: FormsStore
}

export default combineReducers({
    meta,
    forms
});
