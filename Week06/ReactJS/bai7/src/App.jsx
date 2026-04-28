import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Redux Async API Management</h2>
      <UserList />
    </div>
    </>
  )
}

export default App
