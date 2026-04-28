import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const MOCK_PRODUCTS = [
  { id: 1, name: 'MacBook Pro 14', price: 2000 },
  { id: 2, name: 'Logitech Mouse', price: 50 },
  { id: 3, name: 'Mechanical Keyboard', price: 150 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
      <h3>Products</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <h4>{product.name}</h4>
            <p style={{ color: '#0d6efd', fontWeight: 'bold' }}>${product.price}</p>
            <button 
              onClick={() => dispatch(addToCart(product))}
              style={{ cursor: 'pointer', padding: '8px 12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}