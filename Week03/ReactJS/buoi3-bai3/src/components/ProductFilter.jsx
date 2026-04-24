import React, { useState, useMemo } from 'react';
import './ProductFilter.css';

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 5000; i++) {
    products.push({
      id: i,
      name: `Sản phẩm ${i}`,
      price: Math.floor(Math.random() * 1000) + 100, 
    });
  }
  return products;
};

const MOCK_PRODUCTS = generateProducts();

export default function ProductFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(1100);

  const filteredProducts = useMemo(() => {
    const start = performance.now(); 
    
    const result = MOCK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      p.price <= maxPrice
    );

    const end = performance.now();
    
    console.log(`Thời gian lọc 5000 items: ${(end - start).toFixed(2)} ms`); 
    
    return result;
  }, [searchTerm, maxPrice]);

  const totalAmount = useMemo(() => {
    return filteredProducts.reduce((sum, currentProduct) => sum + currentProduct.price, 0);
  }, [filteredProducts]); 

  return (
    <div className="filter-container">
      <h2>Lọc Sản Phẩm (5000 items)</h2>
      
      <div className="filter-controls">
        <input 
          type="text" 
          placeholder="Tìm tên sản phẩm..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
          <label>Giá tối đa: <strong>{maxPrice}đ</strong></label>
          <input 
            type="range" min="0" max="1100" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="total-box">
        Tổng tiền danh sách: {totalAmount.toLocaleString('vi-VN')} đ
      </div>

      <ul className="product-list">
        {filteredProducts.map(p => (
          <li key={p.id} className="product-item">
            <span>{p.name}</span>
            <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>{p.price} đ</span>
          </li>
        ))}
      </ul>
    </div>
  );
}