import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => dispatch(toggleTodo(todo.id))} 
      />
      
      {isEditing ? (
        <input 
          type="text" 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)}
          style={{ flex: 1, padding: '4px' }}
        />
      ) : (
        <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#888' : '#000' }}>
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleSave} style={{ cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', padding: '5px 10px' }}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>Edit</button>
      )}

      <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>
        Delete
      </button>
    </li>
  );
}