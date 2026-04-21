import React, { useState } from 'react';
import './Alert.css';

export default function Alert({ type = 'success', message }) {
  const [isVisible, setIsVisible] = useState(true);
  
  const [isFading, setIsFading] = useState(false);

  const handleClose = () => {
    setIsFading(true); 
    
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  if (!isVisible) return null;

  const alertClass = `alert-container alert-${type} ${isFading ? 'alert-hide' : ''}`;

  return (
    <div className={alertClass}>
      <span>{message}</span>
      <button className="alert-close" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
}