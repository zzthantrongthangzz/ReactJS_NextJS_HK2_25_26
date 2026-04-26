import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Lỗi kết nối API!'); 
        }
        
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{ color: 'red' }}>Error: {error}</h3>;
  }

 return (
    <div>
      <h2>Danh sách Dữ liệu</h2>
      <ul>
        {data.slice(0, 5).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}