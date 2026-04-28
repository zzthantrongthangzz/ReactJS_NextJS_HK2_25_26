import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../store/cartSlice';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return <h3>Your Cart is empty.</h3>;
  }

  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
            
            <div style={{ flex: 1 }}>
              <strong>{item.name}</strong> - ${item.price}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ cursor: 'pointer', padding: '5px 10px' }}>-</button>
              <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ cursor: 'pointer', padding: '5px 10px' }}>+</button>
            </div>

            <div style={{ minWidth: '80px', textAlign: 'right', fontWeight: 'bold' }}>
              ${item.price * item.quantity}
            </div>

          </li>
        ))}
      </ul>
      
      <div style={{ textAlign: 'right', fontSize: '20px', color: '#dc3545', marginTop: '20px' }}>
        <strong>Total: ${totalAmount}</strong>
      </div>
    </div>
  );
}