import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

export default function UserStatus() {
  const [currentStatus, setCurrentStatus] = useState('online');

  const toggleStatus = () => {
    if (currentStatus === 'online') setCurrentStatus('busy');
    else if (currentStatus === 'busy') setCurrentStatus('offline');
    else setCurrentStatus('online');
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '10px', maxWidth: '300px', margin: '20px auto' }}>
      <h3>Trạng thái người dùng</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <StatusBadge status={currentStatus} />
      </div>

      <button 
        onClick={toggleStatus}
        style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #0d6efd', backgroundColor: 'white', color: '#0d6efd' }}
      >
        Đổi trạng thái
      </button>
    </div>
  );
}