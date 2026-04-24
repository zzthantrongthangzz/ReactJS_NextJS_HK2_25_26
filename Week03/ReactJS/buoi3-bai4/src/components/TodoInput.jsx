import React from 'react';

export default function TodoInput({ value, onChange, onAdd }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Nhập việc cần làm..."
        style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button 
        onClick={onAdd}
        style={{ padding: '8px 15px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Thêm
      </button>
    </div>
  );
}