import React, { useState, useEffect, useRef, useContext } from 'react';
import Product from './Product';
import './styleCarrusel.css';
import { CartContext } from '../context/CartContext';

const ProductListCarrusel = () => {

  const { productos, agregarCarrito } = useContext(CartContext)
  const [indice, setIndice] = useState(0);
  const [productosPorSlide, setProductosPorSlide] = useState(1);
  const contenedorRef = useRef(null);
  const anchoCard = 250;

  useEffect(() => {
    const actualizarCantidad = () => {
      if (contenedorRef.current) {
        const anchoContenedor = contenedorRef.current.offsetWidth;
        const cantidad = Math.floor(anchoContenedor / anchoCard);
        setProductosPorSlide(cantidad > 0 ? cantidad : 1);
      }
    };

    actualizarCantidad();
    window.addEventListener('resize', actualizarCantidad);
    return () => window.removeEventListener('resize', actualizarCantidad);
  }, []);

  const siguiente = () => {
    setIndice((prev) =>
      (prev + 1) * productosPorSlide >= productos.length ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setIndice((prev) =>
      prev - 1 < 0 ? Math.floor((productos.length - 1) / productosPorSlide) : prev - 1
    );
  };

  return (
    <div className='contenedorCarrusel' ref={contenedorRef}>
      <button className='botonCarrusel' onClick={anterior}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <div
        className="carruselVista"
        style={{
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          className="carruselTrack"
          style={{
            transform: `translateX(-${indice * productosPorSlide * anchoCard}px)`
          }}
        >
          {productos.map((producto) => (
            <div
              key={producto.id}
             className="cardProducto"
            >
              <Product producto={producto} agregarCarrito={agregarCarrito} />
            </div>
          ))}
        </div>
      </div>

      <button className='botonCarrusel' onClick={siguiente}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProductListCarrusel;