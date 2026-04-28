import React from 'react';
import { useDispatch } from 'react-redux';
import { triggerToast } from '../store/notificationSlice';

export default function TestControl() {
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '50px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Bảng điều khiển (Kích hoạt từ xa)</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => dispatch(triggerToast('Lưu dữ liệu thành công!', 'success'))}
          style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Test Success
        </button>
        
        <button 
          onClick={() => dispatch(triggerToast('Không thể kết nối máy chủ!', 'error'))}
          style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Test Error
        </button>

        <button 
          onClick={() => dispatch(triggerToast('Bạn có một tin nhắn mới.', 'info'))}
          style={{ padding: '10px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Test Info
        </button>
      </div>
    </div>
  );
}