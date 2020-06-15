import { useState } from 'react';

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (value) => {
      setTodos([...todos, {id: todos.length + 1, value: value, checked: false}]);
    },
    addLocalTodos: (tasks) => {
      setTodos(tasks);
    },
    checkTodo: (index) => {
      todos.forEach(element => {
        if (element.id === index) {
          element.checked = !element.checked;
        }
      });
      setTodos([...todos])
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter(item => item.id !== todoIndex);
      setTodos(newTodos);
    }
  }
}