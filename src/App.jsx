import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';
import DetallesProductos from './pages/DetallesProductos';
import RutaProtegidas from './auth/RutasProtegidas'
import Login from './pages/Login';
import Admin from './pages/Admin';
import { CartContext } from './context/CartContext';

function App() {
  const {cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated } = useContext (CartContext)

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/sobre-nosotros' element={<SobreNosotros />} />

        <Route path='/productos' element={<Productos/>} />

        <Route path='/productos/:id' element={<DetallesProductos />} />

        <Route path='/contacto' element={<Contactos />} />
        
        <Route path='/admin' element={<RutaProtegidas isAuthenticated={isAuthenticated}> <Admin  cart={cart} cargando={cargando} /> </RutaProtegidas>} />

        <Route path='/login' element={<Login />} />
        
        <Route path='*' element={<NotFound />} />



      </Routes>
    </Router>
  )
}

export default App
