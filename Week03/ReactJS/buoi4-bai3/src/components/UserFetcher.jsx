import React, { useState, useEffect } from 'react';

export default function UserFetcher() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId < 1 || userId > 10 || !userId) {
      setError("User not found");
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error("User not found");
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Tìm kiếm người dùng</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Nhập User ID (1-10): </label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          style={{ padding: '5px', marginLeft: '10px' }}
        />
      </div>
      {loading && <h3>Loading...</h3>}
      
      {error && !loading && <h3 style={{ color: 'red' }}>{error}</h3>}
      
      {user && !loading && !error && (
        <div style={{ border: '1px solid #ccc', padding: '15px', maxWidth: '300px', borderRadius: '5px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
}