import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
      },
    reducers: {
        // addTodo: (state, {payload})=>{state.todos.push(payload)}
        addTodo: (state, {payload})=>{state.todos=[...state.todos, payload]},
        // deleteTodo: (state, {payload})=>{state.todos.filter(todo => todo.id !== payload)}
        deleteTodo: (state, {payload})=>{state.todos = state.todos.filter(todo => todo.id !== payload)}    } 
})

export const {addTodo, deleteTodo} = todoSlice.actions
