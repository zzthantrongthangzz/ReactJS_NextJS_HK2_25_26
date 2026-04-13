import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      {/* Menu bên trái của Dashboard */}
      <nav style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
        <h3>Dashboard Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>

      <div style={{ flex: 1 }}>
        <Outlet /> 
      </div>
    </div>
  )
}