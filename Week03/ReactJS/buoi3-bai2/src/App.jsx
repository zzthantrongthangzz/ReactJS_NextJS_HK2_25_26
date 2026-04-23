import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DigitalClock from './components/DigitalClock'

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button 
        onClick={() => setShowClock(!showClock)}
        style={{ padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}
      >
        {showClock ? 'Tắt Đồng Hồ' : 'Bật Đồng Hồ'}
      </button>

      {showClock && <DigitalClock />}
    </div>
    </>
  )
}

export default App
