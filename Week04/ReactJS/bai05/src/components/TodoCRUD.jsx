import React, { useState, useEffect } from 'react';

export default function TodoCRUD() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
 
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!res.ok) throw new Error('Không thể tải danh sách');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const previousTodos = [...todos];
    
    const optimisticTodo = { id: Date.now(), title: title, completed: false };
    setTodos([optimisticTodo, ...todos]);
    setTitle('');
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ title: optimisticTodo.title, completed: false, userId: 1 }),
      });

      if (!res.ok) throw new Error('Thêm mới thất bại');
      
      const realTodo = await res.json();
      setTodos((prev) => prev.map((t) => (t.id === optimisticTodo.id ? realTodo : t)));
    } catch (err) {
      setTodos(previousTodos);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const previousTodos = [...todos];

    setTodos(todos.filter((t) => t.id !== id));
    setError(null);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Xóa thất bại');
    } catch (err) {
      setTodos(previousTodos);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h2>Quản lý Công việc (CRUD)</h2>
      
      {error && <div style={{ color: '#dc3545', marginBottom: '15px' }}>Lỗi: {error}</div>}

      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Nhập việc cần làm..."
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={submitting}
        />

        <button 
          type="submit" 
          disabled={submitting || !title.trim()} 
          style={{ padding: '8px 15px', cursor: submitting ? 'not-allowed' : 'pointer' }}
        >
          {submitting ? 'Đang thêm...' : 'Thêm'}
        </button>
      </form>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span>{todo.title}</span>
              <button 
                onClick={() => handleDelete(todo.id)} 
                style={{ color: 'white', backgroundColor: '#dc3545', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}