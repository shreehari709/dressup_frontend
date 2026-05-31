import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
  <OrderProvider>
    <AuthProvider> 
      <App />
    </AuthProvider>
    
  </OrderProvider>
</CartProvider>
  </BrowserRouter>,
)
