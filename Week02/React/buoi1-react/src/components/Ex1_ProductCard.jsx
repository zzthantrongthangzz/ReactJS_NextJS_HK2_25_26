import React from 'react';
import './Ex1_ProductCard.css';

const Ex1_ProductCard = () => {
  return (
    <div className="product-card">
      <img 
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" 
        alt="Product" 
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">Đồng hồ thông minh</h3>
        <p className="product-price">1.500.000 đ</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Ex1_ProductCard;