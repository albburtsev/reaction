import {createStore} from 'store';
import schema from 'reducers/schema';
import * as formsActions from 'ducks/formsDuck';

describe('Forms store', () => {
    let store = null;

    beforeEach(() => {
        store = createStore();
    });

    it('should have initial value', () => {
        expect(store.getState().forms).to.deep.equal(schema.forms);
    });

    it('should update field values', () => {
        const getFieldvalue = (form, name) =>
            store.getState().forms[form][name];
        const form = 'signin';
        const name = 'login';
        const value = 'Alex';

        expect(getFieldvalue(form, name)).to.be.empty;
        store.dispatch(formsActions.update(form, name, value));
        expect(getFieldvalue(form, name)).to.be.equal(value);
    });
});
