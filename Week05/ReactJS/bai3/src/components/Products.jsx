import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        <li><Link to="/products/1">Iphone</Link></li>
        <li><Link to="/products/2">Samsung</Link></li>
        <li><Link to="/products/3">Laptop</Link></li>
      </ul>
    </div>
  )
}