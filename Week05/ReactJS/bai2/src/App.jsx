import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Link, Route, Router, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='*'element={<NotFound/>}></Route>
      </Routes>

      <nav>
        <Link to ='/'>Home</Link> | 
        <Link to ='/about'> About</Link> | 
        <Link to ='/contact'> Contact</Link> | 
      </nav>

    </>
  )
}

export default App
