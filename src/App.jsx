import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';
import DetallesProductos from './pages/DetallesProductos';

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/data/data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000)
      })
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })
  }, [])

  const handleAddToCart = (producto, cantidad) => {

    const productInCart = cart.find((item) => item.id === producto.id);
    if (productInCart) {
      if (producto.stock >= (cantidad + productInCart.quantity)) {
        setCart(cart.map((item) => item.id === producto.id
          ? { ...item, quantity: item.quantity + cantidad, precio: item.precio + (cantidad * producto.precio) }
          : item)
        )}
        else{
          alert('No hay stock suficiente')
        }
    }
    else {
      if (producto.stock >= cantidad) {
        setCart([...cart, { ...producto, quantity: cantidad, precio: producto.precio * cantidad }])
      }
      else {
        alert('No hay stock suficiente')
      }
    }
  }

const handleDeleteFromCart = (producto) => {
  setCart(prevCart => {
    return prevCart
      .map(item => {
        if (item.id === producto.id) {
          const unitPrice = item.precio / item.quantity;
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              precio: item.precio - unitPrice
            };
          } else {
            return null;
          }
        } else {
          return item;
        }
      })
      .filter(item => item !== null);
  });
};


  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/sobre-nosotros' element={<SobreNosotros quitarCarrito={handleDeleteFromCart}  agregarCarrito={handleAddToCart} cart={cart} cargando={cargando}/>} />

        <Route path='/productos' element={<Productos quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path= '/productos/:id' element={<DetallesProductos productos={productos} cart={cart}  quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cargando={cargando}/>}/>

        <Route path='/contacto' element={<Contactos quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} cargando={cargando}/>} />

        <Route path='*' element={<NotFound />} />

    

      </Routes>
    </Router>
  )
}

export default App
