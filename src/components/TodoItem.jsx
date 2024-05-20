export default function TodoItem({ todo, setTodos }) {
  const { id, content, title, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {};

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>

      <button onClick={toggleTodo}>{isDone ? '취소' : '완료'}</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
}
