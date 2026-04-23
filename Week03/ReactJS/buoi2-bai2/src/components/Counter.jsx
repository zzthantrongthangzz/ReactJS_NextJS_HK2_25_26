import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  // Xđ màu dựa vào giá trị của count
  const numberStyle = {
    color: count > 10 ? 'red' : 'black'
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      
      <div className="counter-number" style={numberStyle}>
        {count}
      </div>
      
      <div className="button-group">
        <button className="btn-counter" onClick={handleDecrease}>-</button>
        <button className="btn-counter btn-reset" onClick={handleReset}>Reset</button>
        <button className="btn-counter" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}