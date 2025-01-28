import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "Todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            let updatedTodos = state.concat(action.payload)
            return updatedTodos;
        },
        delTodo: (state, action) => {
            return state = state.filter((todo) =>{
                return todo !== action.payload;
            })
        }
    } 
})

export default TodoSlice;
export const TodoActions = TodoSlice.actions;
