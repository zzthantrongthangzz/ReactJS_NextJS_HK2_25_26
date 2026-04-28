import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <h2>Mini E-Commerce</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <strong>Cart: {cart.length} items</strong>
        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login('Admin')}>Login</button>
        )}
      </div>
    </nav>
  );
}