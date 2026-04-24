import React, { useReducer } from 'react';
import './FetchUsers.css';

const initialState = {
  status: 'idle', // idle' | 'loading' | 'success' | 'error'
  data: [],
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'loading', data: [], error: null };
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { status: 'error', data: [], error: action.payload };
    default:
      return state;
  }
};

export default function FetchUsers() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const loadUsers = async (simulateError = false) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const url = simulateError 
        ? 'https://jsonplaceholder.typicode.com/user_sai_link' 
        : 'https://jsonplaceholder.typicode.com/users';

      const response = await fetch(url);
      
      if (!response.ok) throw new Error('Không thể lấy dữ liệu (Lỗi 404)');
      
      const users = await response.json();
      
      dispatch({ type: 'FETCH_SUCCESS', payload: users });

    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  return (
    <div className="fetch-container">
      <h2>Danh sách Người dùng</h2>
      
      <div className={`status-badge status-${state.status}`}>
        Trạng thái: {state.status}
      </div>

      <div>
        {state.status === 'idle' && (
          <>
            <button className="btn-action" onClick={() => loadUsers()}>Tải Dữ Liệu</button>
            <button className="btn-action btn-retry" onClick={() => loadUsers(true)}>Tải (Giả lập Lỗi)</button>
          </>
        )}

        {state.status === 'loading' && <p>Đang tải dữ liệu, vui lòng chờ...</p>}

        {state.status === 'success' && (
          <ul className="user-list">
            {state.data.slice(0, 5).map(user => (
              <li key={user.id}><strong>{user.name}</strong> - {user.email}</li>
            ))}
          </ul>
        )}

        {state.status === 'error' && (
          <div style={{ color: 'red', marginBottom: '15px' }}>
            <p>Lỗi: {state.error}</p>
            <button className="btn-action btn-retry" onClick={() => loadUsers()}>Thử lại (Retry)</button>
          </div>
        )}
      </div>
    </div>
  );
}