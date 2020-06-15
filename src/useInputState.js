import { useState } from 'react';

export default () => {
  const [valueTodo, setValueTodo] = useState('');

  return {
    valueTodo,
    onChange: event => {
      setValueTodo(event.target.value);
    },
    reset: () => setValueTodo('')
  };
};