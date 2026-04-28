import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Toast from './components/Toast';
import TestControl from './components/TestControl';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Hệ thống Global Notification</h2>
      
      <Toast /> 
      
      <TestControl />
    </div>
    </>
  )
}

export default App
