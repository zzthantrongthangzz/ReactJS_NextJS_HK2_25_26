import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/dashboard'> Dashboard</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='orders' element={<Orders />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
