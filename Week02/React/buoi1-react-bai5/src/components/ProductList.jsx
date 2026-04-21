import React from 'react';
import './ProductList.css';

export default function ProductList() {
  const products = [
    { id: 1, name: 'Điện thoại iPhone', price: '20.000.000đ' },
    { id: 2, name: 'Laptop Dell XPS', price: '35.000.000đ' },
    { id: 3, name: 'Tai nghe AirPods', price: '4.000.000đ' },
    { id: 4, name: 'Đồng hồ Apple Watch', price: '10.000.000đ' },
    { id: 5, name: 'Bàn phím cơ', price: '2.000.000đ' },
    { id: 6, name: 'Chuột Logitech', price: '1.500.000đ' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Danh Sách Sản Phẩm</h2>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p style={{ color: '#dc3545', fontWeight: 'bold' }}>{product.price}</p>
            <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Mua ngay</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}