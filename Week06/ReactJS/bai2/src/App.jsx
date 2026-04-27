import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/themeSlice';

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#1a1a1a';
  }, [theme]);

  return (
    <>
      <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Theme Toggle với Redux</h2>
        <p>Giao diện hiện tại: <strong>{theme.toUpperCase()}</strong></p>
        
        <button 
          onClick={() => dispatch(toggleTheme())}
          style={{ padding: '10px 20px', cursor: 'pointer', fontSize: '16px', marginTop: '20px' }}
        >
          Đổi giao diện
        </button>
      </div>
    </div>
    </>
  )
}

export default App
