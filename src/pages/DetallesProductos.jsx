import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/estaticos/Footer'
import Header from '../components/estaticos/Header'
import './styles/DetalleProducto.css'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet-async';

const DetallesProductos = () => {
  const { cargando, productos, handleAddToCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);
  const incrementar = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
  const decrementar = () => setCantidad(prev => (prev < 1 ? prev - 1 : 1));
  const reiniciarCantidad = () => setCantidad(1);
  const { id } = useParams()
  const product = productos.find(product => product.id == id)


  return (
    <div>
      <Helmet>
        <title>Detalle del Producto | Feel Pretty</title>
        <meta name="description" content="Conocé las características, beneficios y detalles de este producto de Feel Pretty." />
      </Helmet>
      <Header />
      <div>

      
      {cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :

        <div className='contentDetalle'>

          {product ? (
            <div>
              <h2 className='subtitulo'>{product.nombre}</h2>
              <div className='contenedorPrincipal'>
                <div className='contenedorImagen'>
                  <img className='imagenProducto' src={product.imagen} alt={product.nombre} />
                </div>

                <div className='contenedorParrafo'>
                  <div className='detalleProducto'>
                    <p >{product.detalle}</p>
                  </div>
                  <div className='contenedor'>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                      <p className='precio'>${product.precio}</p>
                      <button className='botonAgregar' onClick={() => { handleAddToCart(product, cantidad), reiniciarCantidad() }}>Agregar</button>
                    </div>
                    <div className='cantidadContainer'>
                      <p className='stock'>Stock: {product.stock}</p>
                      <div className='botonesYCantidad'><button className='qtyButton' onClick={decrementar}>-</button>
                        <span className='cantidadProducto'>{cantidad}</span>
                        <button className='qtyButton' onClick={incrementar}>+</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Producto no encontrado</p>
          )}
        </div>
      }
      </div>
      <Footer />
    </div>
  )
}
export default DetallesProductos
