import {combineReducers} from 'redux';

import meta, {IMetaStore} from '../ducks/metaDuck';
import forms, {IFormsStore} from '../ducks/formsDuck';

export interface IStore {
    meta: IMetaStore;
    forms: IFormsStore;
}

export default combineReducers({
    meta,
    forms
});
