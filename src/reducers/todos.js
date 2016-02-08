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
            return id === state.id
                ? Object.assign(state, {completed: true})
                : state;

        default:
            return state;
    }
};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {String} action.type
 */
const todos = (state, action = {}) => {
    switch (action.type) {
        case ACTION_TODO_ADD:
            let lastID = state.lastID + 1,
                action = Object.assign({}, action, {id: lastID});

            return {
                lastID,
                list: [...state.list, todo(undefined, action)]
            };

        case ACTION_TODO_COMPLETE:
            return {
                lastID: state.lastID,
                list: state.list.map(item => todo(item, action))
            };

        default:
            return {
                lastID: 0,
                list: []
            };
    }
};

/**
 * @param {Object} state
 * @param {Object} action
 */
const app = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        )
    };
};

export default app;
