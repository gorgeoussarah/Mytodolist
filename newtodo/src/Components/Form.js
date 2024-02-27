import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
      inputRef.current.focus(); // Focus on the input when editing
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Enter a Todo...'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
        ref={inputRef} // Set the input reference
      />
      <button className='button-add' type='submit'>
        {editTodo ? 'OK' : 'ADD'}
      </button>
    </form>
  );
};

export default Form;
