import redux from 'react-redux'
const createStore = redux.createStore
// const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

// JAVASCRIPT APP
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }    
}

const initialState = {
    numOfCakes: 10
}

// (previousState, action) => newState
// ACTION & REDUCER updates the state based on the actions
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)
console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('Update state ', store.getState())
)
store.subscribe(() => console.log('Update state ', store.getState()))
store.dispatch({
    type: CAKE_ORDERED,
    quantity: 1
})

store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()