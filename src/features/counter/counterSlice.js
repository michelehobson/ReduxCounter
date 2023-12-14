import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    // INITIAL STATE
    name: 'counter',
    initialState: {
        value: 0
    },
    // REDUCER & ACTIONS
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state, action) => {
            state.value -= action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer;