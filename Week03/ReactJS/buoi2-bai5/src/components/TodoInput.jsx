import { useState } from 'react';

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value); 
    setValue(''); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Thêm việc cần làm..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 15px', marginLeft: '5px' }}>Thêm</button>
    </form>
  );
}