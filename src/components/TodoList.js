import React from 'react';

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return <li key={index.toString()}>
            <input
              type='checkbox'
              className='input-checkbox'
            />
            <div
              className={ item.checked ? 'checked' : 'disabled'}
              onClick={() => checkTodo(item.id)}
            ></div>
            <p>{item.value}</p>
            <div
              className='delete-btn'
              onClick={() => deleteTodo(item.id)}
            >
            </div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default TodoList;