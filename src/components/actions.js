import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random().toString(36).substring(2, 15), 
        text: action.payload,
        done: false,
      });
    },
    toggleDone: (state, action) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[todoIndex].done = !state.todos[todoIndex].done;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
     togletodo:(state, action) => {
      state.todos = state.todos.map(todo => todo.id === action.payload? {...todo, completed:!todo.completed} : todo)
       }
  },
});

export const { addTodo, toggleDone, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;



