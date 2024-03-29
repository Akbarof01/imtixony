import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleDone, deleteTodo } from './actions'; 

const TodoApp = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0)
  

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  const handleTogleTodo = (id) => {
    dispatch(toggleDone(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  // const handleTogleTodo = (id) => {
  //   dispatch(togletodo(id));
  // };

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <div className="">
      <div className="input_box">
      <input
      className='INPUT'
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo();
          }
        }}
      />
      <button className='plus' onClick={handleAddTodo}><button className='plus' onClick={increment}>+</button></button>
      </div>
      <h3 className='Task'>Task - {counter}</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? false : ''}>
            {todo.text}
            <button className='done' onClick={() => handleTogleTodo(todo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#9E78CF" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
            </button>
            <button className='trash' onClick={decrement}>
            <button className='trash' onClick={() => handleDeleteTodo(todo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#9E78CF" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
            </button>
            </button>
          </li>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
};

export default TodoApp;
