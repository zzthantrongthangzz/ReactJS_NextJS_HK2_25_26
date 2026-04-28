import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ msg: '', type: '', isOpen: false });

  const showNotification = (msg, type = 'info') => {
    setNotification({ msg, type, isOpen: true });
    setTimeout(() => setNotification({ msg: '', type: '', isOpen: false }), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
      {notification.isOpen && (
        <div style={{ position: 'fixed', top: 20, right: 20, padding: '15px', background: notification.type === 'error' ? '#dc3545' : '#28a745', color: 'white', borderRadius: '5px' }}>
          {notification.msg}
        </div>
      )}
    </NotificationContext.Provider>
  );
};