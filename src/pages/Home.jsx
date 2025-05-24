import React, { useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductListCarrusel from '../components/ProductListCarrusel'
import loading from '../assets/loading.gif'


const Home = ({ cart, productos, cargando, agregarCarrito, quitarCarrito }) => {
  return (
    <div>
      <Header agregarCarrito={agregarCarrito} quitarCarrito={quitarCarrito} cartItems={cart} />
      <main>
        {
          cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px'}} /> :
            <div>
              <section className='imagenFondo'></section>
              <section className='seccionInfo'>
                <div className='item'>
                  <i className="fa-solid fa-truck-moving fa-bounce"></i>
                  <p>Envios a todo el pais.</p>
                </div>
                <div className='item'> 
                  <i className="fa-regular fa-credit-card fa-flip"></i>
                  <p>Todos los medios de pago.</p>
                </div>
                <div className='item'>
                  <i className="fa-brands fa-whatsapp fa-shake"></i>
                  <p>Atencion personalizada.</p>
                </div>
              </section>
              <ProductListCarrusel agregarCarrito={agregarCarrito} productos={productos} />
            </div>

        }

      </main>

      <Footer />
    </div>
  )
}
export default Home