import schema from 'reducers/schema';

const FORMS_UPDATE = 'FORMS_UPDATE';

/**
 * Creates action for updating field value
 * @param {String} form
 * @param {String} name
 * @param {String} value
 * @return {Object}
 */
export const update = (form, name, value) =>
    ({type: FORMS_UPDATE, form, name, value});

export default (state = schema.forms, action) => {
    switch (action.type) {
        case FORMS_UPDATE:
            // @todo: use immutable data structure instead
            state[action.form][action.name] = action.value;
            return state;

        default:
            return state;
    }
};
