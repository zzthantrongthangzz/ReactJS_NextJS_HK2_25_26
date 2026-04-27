import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Redux Global State</h1>
      
      <ComponentA />
      <ComponentB />
      
    </div>
    </>
  )
}

export default App
