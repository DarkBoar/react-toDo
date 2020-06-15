import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useValueTodo from './useValueTodo';

function App() {
  const {todos, deleteTodo, addTodo} = useValueTodo([]);

  return (
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
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
