import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '할일 제목1',
      content: '할일1',
      isDone: false,
    },
    {
      id: 2,
      title: '할일 제목2',
      content: '할일2',
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <h1>To Do List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        statustitle="Working"
        todos={workingTodos}
        setTodos={setTodos}
      />
      <TodoList statustitle="Done" todos={doneTodos} setTodos={setTodos} />
    </main>
  );
}
