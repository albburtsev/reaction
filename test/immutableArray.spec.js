import {createStore} from 'redux';
import immutableArray, {ACTION_APPEND, ACTION_POP} from '../src/reducers/immutableArray';

describe('State', () => {
    let store = createStore(immutableArray);

    it('should be empty array initially', () => {
        expect(store.getState()).to.deep.equal([]);
    });

    it('should handle `ACTION_APPEND` correctly', () => {
        store.dispatch({type: ACTION_APPEND});
        expect(store.getState()).to.deep.equal([0]);

        store.dispatch({type: ACTION_APPEND});
        expect(store.getState()).to.deep.equal([0, 1]);

        store.dispatch({type: ACTION_APPEND});
        expect(store.getState()).to.deep.equal([0, 1, 2]);
    });

    it('should handle `ACTION_POP` correctly', () => {
        store.dispatch({type: ACTION_POP});
        expect(store.getState()).to.deep.equal([0, 1]);

        store.dispatch({type: ACTION_POP});
        expect(store.getState()).to.deep.equal([0]);

        store.dispatch({type: ACTION_POP});
        expect(store.getState()).to.deep.equal([]);
    });

    it('should be immutable', () => {
        let stateBefore = store.getState();

        store.dispatch({type: ACTION_APPEND});

        let stateAfter = store.getState();

        expect(stateBefore !== stateAfter).to.be.true;
    });
});
