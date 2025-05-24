import React from 'react'
import Product from './Product'

const ProductList = ({productos, agregarCarrito}) => {
  
  return (
    <>
        
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', marginTop: '100px'}}>
          {
            productos.map(producto =>(
              <Product key={producto.id} producto={producto} agregarCarrito={agregarCarrito}/>
            ))
          }
        </div>
        
    </>
  )
}

export default ProductList
