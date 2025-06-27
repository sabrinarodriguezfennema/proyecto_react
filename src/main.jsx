import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <CartProvider>
          <AuthProvider>
            <AdminProvider>
              <App />
              <ToastContainer />
            </AdminProvider>
          </AuthProvider>
        </CartProvider>
      </Router>
    </HelmetProvider>
  </StrictMode>,
)
