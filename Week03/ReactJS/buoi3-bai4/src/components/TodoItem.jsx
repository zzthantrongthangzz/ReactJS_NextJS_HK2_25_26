import React, { memo } from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  
  console.log("render item", todo.id); // [cite: 190]

  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px', 
      borderBottom: '1px solid #eee' 
    }}>
      <span 
        onClick={() => onToggle(todo.id)} 
        style={{ 
          cursor: 'pointer', 
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#000'
        }}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)} 
        style={{ color: 'white', backgroundColor: '#dc3545', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Xóa
      </button>
    </li>
  );
};

export default memo(TodoItem);