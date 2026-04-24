import React, { useState, useCallback } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React.memo', completed: false },
    { id: 2, text: 'Học useCallback', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = useCallback((id) => {
    setTodos(prevTodos => prevTodos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }, []); 

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
  }, []);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos(prev => [...prev, newTodo]);
    setInputValue('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2>Tối ưu hiệu năng Todo List</h2>
      
      <TodoInput 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        onAdd={handleAdd} 
      />
      
      <TodoList 
        todos={todos} 
        onToggle={handleToggle} 
        onDelete={handleDelete} 
      />
    </div>
  );
}