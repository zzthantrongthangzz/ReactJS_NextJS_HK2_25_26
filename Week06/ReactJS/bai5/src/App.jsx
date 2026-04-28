import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center' }}>Redux Shopping Cart</h2>
        <ProductList />
        <Cart />
      </div>
    </>
  )
}

export default App
