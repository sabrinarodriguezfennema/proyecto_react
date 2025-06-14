import React, { useContext } from 'react'
import Product from './Product'
import { CartContext } from '../context/CartContext'

const ProductList = () => {
  const { productos, handleAddToCart, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  console.log(busqueda);


  return (
    <>
      <div>
        <input style={{marginTop:'100px', marginLeft:'20px'}} type="text" placeholder='Buscar producto...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
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
