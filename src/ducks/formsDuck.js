import set from 'lodash/set';
import schema from 'reducers/schema';

const FORMS_UPDATE = 'FORMS_UPDATE';

export const update = (path, value) =>
    ({type: FORMS_UPDATE, path, value});

export default (state = schema.forms, action) => {
    switch (action.type) {
        case FORMS_UPDATE:
            // @todo: use immutable data structure instead
            return set(state, action.path, action.value);
        default:
            return state;
    }
};
