import React from 'react';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { valueTodo, reset, onChange } = useInputState();

  return (
    <form onSubmit={(event) => {
          event.preventDefault();
  
          saveTodo(valueTodo);
          reset();
        }
      }
    >
      <input
        type='text'
        className='color__blue'
        value={valueTodo}
        onChange={onChange}
        placeholder='Введите задачу...'
      />
    </form>
  );
};

export default TodoForm;