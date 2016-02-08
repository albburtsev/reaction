import {createStore} from 'redux';
import app, {ACTION_TODO_ADD, ACTION_TODO_COMPLETE} from '../src/reducers/todos';

describe('Store', () => {
    it('should be empty array of todos initially', () => {
        let store = createStore(app),
            state = store.getState();

        expect(state.todos).to.deep.equal([]);
    });

    it('should handle `ACTION_TODO_ADD` correctly', () => {
        let store = createStore(app);

        store.dispatch({id: 1, type: ACTION_TODO_ADD, title: 'Issue #1'});
        store.dispatch({id: 2, type: ACTION_TODO_ADD, title: 'Issue #2'});

        let state = store.getState();

        expect(state.todos).to.deep.equal([
            {id: 1, title: 'Issue #1', completed: false},
            {id: 2, title: 'Issue #2', completed: false}
        ]);
    });

    it('should handle `ACTION_TODO_ADD` correctly', () => {
        let store = createStore(app);

        store.dispatch({id: 1, type: ACTION_TODO_ADD, title: 'Issue #1'});
        store.dispatch({id: 1, type: ACTION_TODO_COMPLETE});

        let state = store.getState();

        expect(state.todos).to.deep.equal([
            {id: 1, title: 'Issue #1', completed: true}
        ]);
    });
});
