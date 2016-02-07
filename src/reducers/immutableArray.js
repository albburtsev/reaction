export const ACTION_APPEND = 'APPEND';
export const ACTION_POP = 'POP';

/**
 * Defines length of given array, adds it as a next element
 * @param {Array} state
 * @param {Object} action
 * @param {String} action.type
 * @return {Array} New state
 */
const immutableArray = (state = [], {type} = {}) => {
    if (type === ACTION_APPEND) {
        return [
            ...state,
            state.length
        ];
    } else if (type === ACTION_POP) {
        return state.slice(0, state.length - 1);
    }

    return state;
};

export default immutableArray;
