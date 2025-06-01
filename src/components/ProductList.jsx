import React ,{useContext} from 'react'
import Product from './Product'
import { CartContext  } from '../context/CartContext'

const ProductList = () => {
  const { productos, handleAddToCart } = useContext(CartContext)
  
  return (
    <>
        
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', marginTop: '100px'}}>
          {
            productos.map(producto =>(
              <Product key={producto.id} producto={producto} handleAddToCart={handleAddToCart}/>
            ))
          }
        </div>
        
    </>
  )
}

export default ProductList
