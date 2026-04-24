import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductFilter from './components/ProductFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ProductFilter />
    </div>
    </>
  )
}

export default App
