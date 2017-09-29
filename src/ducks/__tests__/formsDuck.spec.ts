import { createStore } from '../../store';
import * as formsActions from '../formsDuck';

describe('Forms store', () => {
    let store = null as any;

    beforeEach(() => {
        store = createStore();
    });

    test('should update field values', () => {
        const getFieldvalue = (form: string, name: string) => store.getState().forms[form][name];
        const form = 'signin';
        const name = 'login';
        const value = 'Alex';

        expect(getFieldvalue(form, name)).toBe('');
        store.dispatch(formsActions.update(form, name, value));
        expect(getFieldvalue(form, name)).toBe(value);
    });
});
