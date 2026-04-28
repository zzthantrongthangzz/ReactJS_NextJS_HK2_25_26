import React from 'react';
import { useSelector } from 'react-redux';
import './Toast.css';

export default function Toast() {
  const { message, type, isVisible } = useSelector((state) => state.notification);

  if (!isVisible) return null;

  return (
    <div className={`toast-container toast-${type}`}>
      {message}
    </div>
  );
}