import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

const TODO_STORE = configureStore({
    reducer: {
        TodoItems: TodoSlice.reducer,
    },
    // Other store setup
})

export default TODO_STORE;