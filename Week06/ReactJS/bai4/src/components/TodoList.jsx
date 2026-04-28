// src/components/TodoList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector(state => state.todos.list);

  if (todos.length === 0) return <p>No tasks available.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}