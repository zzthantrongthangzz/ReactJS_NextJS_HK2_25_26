import React, { useState } from 'react';
import './UserForm.css';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="form-container">
      <h2>Nhập thông tin</h2>
      
      <div className="input-group">
        <label>Tên của bạn:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Ví dụ: Nguyễn Văn A"
        />
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Ví dụ: email@example.com"
        />
      </div>

      <div className="result-box">
        <h3>Dữ liệu đang nhập:</h3>
        <p><strong>Tên:</strong> {name || '...'}</p>
        <p><strong>Email:</strong> {email || '...'}</p>
      </div>
    </div>
  );
}