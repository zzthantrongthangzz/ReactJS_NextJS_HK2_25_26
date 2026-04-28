import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout, fetchProtectedData } from '../store/authSlice';

export default function AuthApp() {
  const dispatch = useDispatch();
  const { token, loading, error, protectedData } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('emilys'); // Mock data có sẵn để test
  const [password, setPassword] = useState('emilyspass');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>JWT Auth Flow</h2>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      
      {!token ? (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" style={{ padding: '10px' }}
          />
          <input 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" style={{ padding: '10px' }}
          />
          <button type="submit" disabled={loading} style={{ padding: '10px', backgroundColor: '#0d6efd', color: 'white', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Đang xác thực...' : 'Login'}
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#28a745' }}>Đăng nhập thành công!</h3>
          <p style={{ fontSize: '12px', wordBreak: 'break-all', backgroundColor: '#f4f4f4', padding: '10px' }}>
            <strong>Your Token:</strong> {token}
          </p>

          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button 
              onClick={() => dispatch(fetchProtectedData())}
              style={{ padding: '10px', backgroundColor: '#17a2b8', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Lấy dữ liệu bảo mật (Fetch API)
            </button>
            <button 
              onClick={() => dispatch(logout())}
              style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Logout
            </button>
          </div>

          {protectedData && (
            <div style={{ marginTop: '20px', textAlign: 'left', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
              <h4>Dữ liệu trả về từ API:</h4>
              <p><strong>Name:</strong> {protectedData.firstName} {protectedData.lastName}</p>
              <p><strong>Email:</strong> {protectedData.email}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}