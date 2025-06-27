import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductListCarrusel from '../components/ProductListCarrusel'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet-async';
const Home = () => {

  const { cargando } = useContext(CartContext)

  return (
    <div>
      <Helmet>
        <title>Inicio | Feel Pretty</title>
        <meta name="description" content="Descubrí Feel Pretty, tu tienda de belleza y cuidado personal. Productos seleccionados para vos." />
      </Helmet>
      <Header />
      <main>
        {
          cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :
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
              <div className='tren-wrapper '>
                <section className="tren">
                  <h2>¡PROMOCIÓN DE INVIERNO!</h2>
                  <h3>Llevá 2 prendas y pagá 1 en abrigos seleccionados.</h3>
                  <h4>Solo hasta el 30/06. En tienda física y online.</h4>
                </section>
              </div>
              <ProductListCarrusel />

            </div>

        }

      </main>

      <Footer />
    </div>
  )
}
export default Home