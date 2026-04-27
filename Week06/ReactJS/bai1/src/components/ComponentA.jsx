import React from 'react';
import { useSelector } from 'react-redux';

export default function ComponentA() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ padding: '20px', border: '1px solid blue', marginBottom: '10px' }}>
      <h2>Component A (Hiển thị)</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Giá trị hiện tại: {count}</p>
    </div>
  );
}