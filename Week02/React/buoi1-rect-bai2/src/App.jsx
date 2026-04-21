import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '50px', display: 'flex', gap: '10px' }}>
      
      {/* Truyền props type để đổi màu */}
      <Button type="primary">Nút Primary</Button>
      <Button type="danger">Nút Danger</Button>
      <Button type="success">Nút Success</Button>
      
    </div>
    </>
  )
}

export default App
