import React from 'react';
import './Button.css'; 

export default function Button({ type = 'primary', children }) {
  
  const dynamicClass = `btn btn-${type}`;

  return (
    <button className={dynamicClass}>
      {children}
    </button>
  );
}