import {createStore} from 'store';
import schema from 'reducers/schema';
import * as formsActions from 'ducks/formsDuck';

describe('Forms store', () => {
    let store = null;

    beforeEach(() => {
        store = createStore();
    });

    test('should have initial value', () => {
        expect(store.getState().forms).toEqual(schema.forms);
    });

    test('should update field values', () => {
        const getFieldvalue = (form, name) =>
            store.getState().forms[form][name];
        const form = 'signin';
        const name = 'login';
        const value = 'Alex';

        expect(getFieldvalue(form, name)).toBe('');
        store.dispatch(formsActions.update(form, name, value));
        expect(getFieldvalue(form, name)).toBe(value);
    });
});
