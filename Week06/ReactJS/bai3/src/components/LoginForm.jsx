import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ username: username, role: 'admin' }));
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px', margin: '40px auto', borderRadius: '8px' }}>
      <h3 style={{ textAlign: 'center', marginTop: 0 }}>Đăng nhập</h3>
      <input 
        type="text" 
        placeholder="Nhập tên của bạn..." 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        style={{ width: '100%', boxSizing: 'border-box', padding: '10px', marginBottom: '15px' }}
      />
      <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer', backgroundColor: '#0d6efd', color: 'white', border: 'none' }}>
        Login
      </button>
    </form>
  );
}