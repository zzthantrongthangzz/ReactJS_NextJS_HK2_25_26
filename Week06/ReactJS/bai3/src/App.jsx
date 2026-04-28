import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div style={{ fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div>
        {!user ? (
          <LoginForm />
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Chào mừng bạn đã vào bên trong hệ thống!</h2>
            <p>Nội dung trang chủ chỉ dành cho thành viên.</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
