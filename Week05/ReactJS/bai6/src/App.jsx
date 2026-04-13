import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './components/AuthContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/dashboard'> Dashboard</Link> |
        <Link to='/login'> Login</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='orders' element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App