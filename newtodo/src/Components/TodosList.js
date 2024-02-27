import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>{
        if(item.id === todo.id) {
          return { ...item, completed: !item.completed};
        }
        return item;
      })
    );
  };
  const handleEdit = ({id}) => {
    const findTodo = todos.find((todos) => todos.id === id);
    setEditTodo(findTodo);
  }
  const handleDelete = ({id}) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };
  return (
    <div>
        {todos.map((todos) => 
        <li className='list-item' key={todos.id}>
          <input
           type='text' 
           value={todos.title} 
           className={`list ${todos.completed ? 'complete' : ''}`} 
           onChange={(event) => event.preventDefault()}
           />
           <div>
             <button
              className='button-complete task-button' 
              onClick={() => handleComplete(todos)}
             >
              <i className='fa fa-check-circle'></i>
             </button>
             <button className='button-edit task-button' onClick={() => handleEdit(todos)}>
              <i className='fa fa-edit'></i>
             </button>
             <button
              className='button-delete task-button' 
              onClick={()=> handleDelete(todos)} 
             >
              <i className='fa fa-trash'></i>
             </button>
           </div>

        </li>
        )}
    </div>);
  
};

export default TodoList