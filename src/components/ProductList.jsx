import React, { useContext } from 'react'
import Product from './Product'
import { CartContext } from '../context/CartContext'

const ProductList = () => {
  const { handleAddToCart, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  console.log(busqueda);


  return (
    <>
      <div>
        <div className="contenedorBuscador">
          <input className="buscador" type="text" placeholder='Buscar producto...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)}  style={{marginTop:'60px'}}/> <i class="fas fa-search"></i>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>

          {
            productosFiltrados.map(producto => (
              <Product key={producto.id} producto={producto} handleAddToCart={handleAddToCart} />
            ))
          }</div>
      </div>

    </>
  )
}

export default ProductList
