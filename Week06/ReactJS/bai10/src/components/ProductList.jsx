import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { NotificationContext } from '../context/NotificationContext';
import { AuthContext } from '../context/AuthContext';

export default function ProductList() {
  const { products, loading, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);
  const { user } = useContext(AuthContext);

  const handleAdd = (product) => {
    if (!user) {
      showNotification('Please login to add items!', 'error');
      return;
    }
    addToCart(product);
    showNotification(`${product.title} added to cart!`, 'success');
  };

  if (loading) return <h3>⏳ Loading products...</h3>;
  if (error) return <h3 style={{ color: 'red' }}>❌ Error: {error}</h3>;

  return (
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
          <h4>{p.title}</h4>
          <p style={{ color: '#0d6efd', fontWeight: 'bold' }}>${p.price}</p>
          <button onClick={() => handleAdd(p)} style={{ padding: '8px', width: '100%', cursor: 'pointer' }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}