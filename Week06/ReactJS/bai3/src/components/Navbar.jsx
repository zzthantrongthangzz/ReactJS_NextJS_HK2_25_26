import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '15px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd' }}>
      <strong>Hệ Thống Quản Lý</strong>
      
      <div>
        {user ? (
          <>
            <span style={{ marginRight: '15px' }}>Xin chào, <strong>{user.username}</strong></span>
            <button onClick={() => dispatch(logout())} style={{ cursor: 'pointer' }}>Đăng xuất</button>
          </>
        ) : (
          <span style={{ color: '#888' }}>Khách (Chưa đăng nhập)</span>
        )}
      </div>
    </div>
  );
}