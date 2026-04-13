import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/products'> Products</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App