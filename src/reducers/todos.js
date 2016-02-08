export const ACTION_TODO_ADD = 'TODO_ADD';
export const ACTION_TODO_COMPLETE = 'TODO_COMPLETE';

/**
 * @param {Array} state
 * @param {Object} action
 * @param {Number} action.id
 * @param {String} action.type
 * @param {String} action.title
 */
const todo = (state, {id, type, title} = {}) => {
    switch (type) {
        case ACTION_TODO_ADD:
            return {
                id,
                title,
                completed: false
            };

        case ACTION_TODO_COMPLETE:
            if (id === state.id) {
                return Object.assign(state, {completed: true});
            }
            return state;

        default:
            return state;
    }
};

/**
 * @param {Array} state
 * @param {Object} action
 * @param {String} action.type
 */
const todos = (state = [], action = {}) => {
    switch (action.type) {
        case ACTION_TODO_ADD:
            return [
                ...state,
                todo(undefined, action)
            ];

        case ACTION_TODO_COMPLETE:
            return state.map((item) => todo(item, action))

        default:
            return state;
    }
};

export default todos;
