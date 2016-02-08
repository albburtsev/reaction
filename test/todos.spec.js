import {createStore} from 'redux';
import app, {ACTION_TODO_ADD, ACTION_TODO_COMPLETE} from '../src/reducers/todos';

describe('Store', () => {
    it('should  empty list initially', () => {
        let store = createStore(app),
            {todos} = store.getState();

        expect(todos.list).to.deep.equal([]);
        expect(todos.lastID).to.equal(0);
    });

    it('should handle `ACTION_TODO_ADD` correctly', () => {
        let store = createStore(app);

        store.dispatch({type: ACTION_TODO_ADD, title: 'Issue #1'});
        store.dispatch({type: ACTION_TODO_ADD, title: 'Issue #2'});

        let {todos} = store.getState();

        expect(todos.list).to.deep.equal([
            {id: 1, title: 'Issue #1', completed: false},
            {id: 2, title: 'Issue #2', completed: false}
        ]);
        expect(todos.lastID).to.equal(2);
    });

    it('should handle `ACTION_TODO_COMPLETE` correctly', () => {
        let store = createStore(app);

        store.dispatch({type: ACTION_TODO_ADD, title: 'Issue #1'});
        store.dispatch({id: 1, type: ACTION_TODO_COMPLETE});

        let {todos} = store.getState();

        expect(todos.list).to.deep.equal([
            {id: 1, title: 'Issue #1', completed: true}
        ]);
        expect(todos.lastID).to.equal(1);
    });
});
