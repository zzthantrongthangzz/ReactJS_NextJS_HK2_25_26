import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

export default function ComponentB() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h2>Component B (Điều khiển)</h2>
      <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>
        Giảm (-)
      </button>
      <button onClick={() => dispatch(increment())}>
        Tăng (+)
      </button>
    </div>
  );
}