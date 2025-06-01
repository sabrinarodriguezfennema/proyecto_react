import React, { useState } from 'react'
import './styleProductos.css'
import { Link } from "react-router-dom";

const Product = ({ producto, handleAddToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const incrementar = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrementar = () => setCantidad(prev => (prev < 1 ? prev - 1 : 1));
  const reiniciarCantidad = () => setCantidad(1);

  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={producto.imagen} alt="" className='imagen' />
      </div>
      <div className='datosProductos'>
        <h3 className='nombre'>{producto.nombre}</h3>
        <div className='contenedorPrecioYAgregar'>
          <p className='precio'>${producto.precio}</p>
          <button className='botonAgregar' onClick={() => { handleAddToCart(producto, cantidad), reiniciarCantidad() }}>Agregar</button>
        </div>
        <Link className='botonVerMas' to={`/productos/${producto.id}`}> Ver mas </Link>

      </div>

    </section>
  )
}

export default Product
