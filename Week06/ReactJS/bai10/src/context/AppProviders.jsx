import React from 'react';
import { NotificationProvider } from './NotificationContext';
import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';

export default function AppProviders({ children }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}