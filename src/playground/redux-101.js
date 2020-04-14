import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
        };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
        };
        default: 
            return state;          
    }
   /* if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        };
    }else {
        return state;
    }*/    
});

const unsubscibe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// I'd like to increment/decrement the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5 
});

store.dispatch({
    type: 'INCREMENT'
});

// RESET - set the count to zero 
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10 
});

store.dispatch({
    type: 'SET',
    count: 101
});