import { useState } from 'react';

export default function TodoForm({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim())
      return alert('제목과 내용을 입력해주세요.');
    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, nextTodo]);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="제목"
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="내용"
      />

      <button type="submit">등록</button>
    </form>
  );
}
