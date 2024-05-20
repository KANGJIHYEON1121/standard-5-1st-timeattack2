import TodoItem from './TodoItem';

export default function TodoList({ todos, statustitle, setTodos }) {
  return (
    <div>
      <h1>{statustitle}</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} setTodos={setTodos} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
