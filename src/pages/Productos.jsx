import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import '../App.css'

const Productos = ({cart, productos,cargando,agregarCarrito, quitarCarrito}) => {
  return (
    
    <div>
        <Header  agregarCarrito={agregarCarrito} quitarCarrito={quitarCarrito} cartItems={cart}/>
            
            {
                cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px'}} />:
                <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
            }
        <Footer/>
    </div>
  )
}

export default Productos;
