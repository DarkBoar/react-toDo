import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import useValueTodo from './useValueTodo';

function App() {
  const { todos, deleteTodo, addTodo, addLocalTodos, checkTodo } = useValueTodo([]);

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    addLocalTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1 className='color__blue'>Список задач</h1>
        <TodoForm saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }
        }
        />
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
