import React, { useState } from 'react';

export default function UserFormObject() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,       
      [name]: value       
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Thông tin người dùng</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Họ tên:</label>
        <input 
          type="text" 
          name="name" 
          value={user.name} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={user.email} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Tuổi:</label>
        <input 
          type="number" 
          name="age" 
          value={user.age} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '20px', background: '#f4f4f4', padding: '10px' }}>
        <h4>Dữ liệu trong State:</h4>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}