import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import logo from '../../assets/logo.jpg'
import { CartContext } from '../../context/CartContext'

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const {cart} = useContext(CartContext);

    return (
        <header>

            <nav className='navegacion'>
                <img src={logo} alt="logo" style={{ with: '50px', height: '50px', margin: '10px', paddingLeft: '10px' }} />
                
                <ul className='ulNavegacion'>
                    <li className='liMenu'><Link to='/' className='link'>Inicio</Link></li>
                    <li className='liMenu'><Link to='/sobre-nosotros' className='link'>Sobre nosotros</Link></li>
                    <li className='liMenu'><Link to='/productos' className='link'>Productos</Link></li>
                    <li className='liMenu'><Link to='/contacto' className='link'>Contacto</Link></li>
                    <li><Link to='/admin' className='link'><i className="fa-solid fa-right-from-bracket"> </i></Link></li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <Cart isOpen={isCartOpen} onClose={() =>
                            setCartOpen(false)} />
                    </li>
                    {cart.length !== 0 && <div style={{paddingBottom : '10px'}}><li style={{ fontSize: '12px'}}>{cart.length}</li></div>}
                    
                </ul>

            </nav>
        </header>
    )
}

export default Header
