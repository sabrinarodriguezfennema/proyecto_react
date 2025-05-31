import React , {useContext} from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import '../App.css'
import { CartContext } from '../context/CartContext'

const Productos = () => {
  const { cargando } = useContext(CartContext);
  return (
    
    <div>
        <Header />
            
            {
                cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px'}} />:
                <ProductList />
            }
        <Footer/>
    </div>
  )
}

export default Productos;
