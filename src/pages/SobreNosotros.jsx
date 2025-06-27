import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './styles/SobreNosotros.css'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet-async'

const SobreNosotros = () => {
  const { cargando } = useContext(CartContext);
  return (
    <div>
      <Helmet>
        <title>Sobre Nosotros | Feel Pretty</title>
        <meta name="description" content="Conocé Feel Pretty: nuestra historia, misión y compromiso con la belleza real y accesible." />
      </Helmet>
      <Header />
      <main className='contentSobreNosotros'>
        {cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :
          <div>
            <div className='seccionParrafo'>
              <h1 className='titulo'> Bienvenida a Feel Pretty.</h1>
              <h2>Sentite linda, sentite vos.</h2>
              <p>
                Feel Pretty es mucho más que una tienda de ropa: es un espacio pensado para mujeres reales, con estilos auténticos y personalidades únicas. Nacimos con una misión clara: ofrecer prendas que no solo sigan tendencias, sino que acompañen momentos, empoderen decisiones y reflejen quién sos realmente.
              </p>
              <p>
                Comenzamos como un pequeño emprendimiento con un gran sueño: crear una marca de moda femenina que celebre la belleza desde la diversidad, la comodidad y la seguridad personal. Con esfuerzo, dedicación y mucho amor por el detalle, fuimos creciendo, escuchando a nuestras clientas y construyendo una comunidad donde cada mujer se sienta representada.
              </p>
              <p>
                Nos inspiran las mujeres fuertes, independientes, sensibles, creativas, las que se reinventan cada día. Diseñamos y seleccionamos cuidadosamente nuestras colecciones para acompañarte en cada etapa: desde el outfit casual de todos los días hasta ese conjunto especial que te hace sentir única. Cada prenda que ofrecemos busca combinar estilo, calidad y funcionalidad, para que te sientas linda sin dejar de ser vos misma.
              </p>
            </div>

            <div className='contenedor'>
              <div className='contenedorPorDescripcion'>
                <h4 className='descripcion'> Nuestro compromiso</h4>
                <ul className='itemContenedor'>
                  <li>Calidad y diseño: Trabajamos con materiales seleccionados y diseños pensados para durar y enamorar.</li>
                  <li>Atención personalizada: Te acompañamos en todo momento para ayudarte a encontrar lo que mejor se adapta a vos.</li>
                  <li>Moda consciente: Apoyamos el consumo responsable, apostando por prendas versátiles y atemporales.</li>
                  <li>Comunidad Feel Pretty: Queremos que cada clienta se sienta parte de esta familia. Escuchamos, aprendemos y crecemos juntas.</li>
                </ul>
              </div>
            </div>
            <div className='seccionParrafo' >
              <p>
                Que cada vez que elijas vestirte con Feel Pretty, te sientas linda, segura y poderosa. Porque sabemos que cuando te sentís bien con vos misma, lo reflejás en todo lo que hacés.
              </p>
            </div>
          </div>
        }
      </main>
      <Footer />
    </div>
  )
}

export default SobreNosotros;
