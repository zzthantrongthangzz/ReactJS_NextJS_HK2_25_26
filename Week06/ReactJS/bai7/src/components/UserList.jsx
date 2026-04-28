import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/userSlice';

export default function UserList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '20px' }}><h3>🌀 Loading Users...</h3></div>;

  if (error) return <div style={{ color: 'red', textAlign: 'center' }}><h3>❌ Error: {error}</h3></div>;

  return (
    <div style={{ padding: '20px' }}>
      <h3>User Directory (Global State)</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((user) => (
          <li key={user.id} style={{ 
            padding: '10px', 
            borderBottom: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <strong>{user.name}</strong>
            <span style={{ fontSize: '14px', color: '#666' }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}