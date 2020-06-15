import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return <li key={index.toString()}>
            {index + 1}. {item}
            <button
              onClick={() => {
                deleteTodo(index)
              }}
            >
              delete
            </button>
          </li>
        })}
      </ul>
    </div>
  );
};

export default TodoList;