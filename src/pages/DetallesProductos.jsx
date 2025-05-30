import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../components/estaticos/Footer'
import Header from '../components/estaticos/Header'
import './styles/DetalleProducto.css'
import loading from '../assets/loading.gif'

const DetallesProductos = ({cargando, productos, quitarCarrito, agregarCarrito, cart }) => {
  const [cantidad, setCantidad] = useState(1);
  const incrementar = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
  const decrementar = () => setCantidad(prev => (prev < 1 ? prev - 1 : 1));
  const reiniciarCantidad = () => setCantidad(1);
  const { id } = useParams()
  const product = productos.find(product => product.id == id)


  return (
    <div>
      <Header agregarCarrito={agregarCarrito} quitarCarrito={quitarCarrito} cartItems={cart} />
      {cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px'}} /> :
       
      <div>
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
                <p className='precio'>${product.precio}</p>
                <p className='stock'>Stock: {product.stock}</p>
                <div className='cantidadContainer'>
                  <button className='qtyButton' onClick={decrementar}>-</button>
                  <span style={{ color: 'black', fontSize: '15px' }}>{cantidad}</span>
                  <button className='qtyButton' onClick={incrementar}>+</button>
                  <button className='botonAgregar' onClick={() => { agregarCarrito(product, cantidad), reiniciarCantidad() }}>Agregar</button>
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
      <Footer />
    </div>
  )
}
export default DetallesProductos
