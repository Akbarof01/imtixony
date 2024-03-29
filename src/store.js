import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './components/actions'; 

export const store = configureStore({
  reducer: {
    todos: todoReducer, 
    
  },
  
});
