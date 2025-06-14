import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import logo from '../../assets/logo.jpg'
import { CartContext } from '../../context/CartContext'

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const { cart } = useContext(CartContext);

    return (
        <header>

            <nav className='navegacion'>
                <img src={logo} alt="logo" style={{ with: '50px', height: '50px', margin: '10px', paddingLeft: '10px' }} />

                <ul className='ulNavegacion'>
                    <li className='liMenu'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className='liMenu'>
                        <NavLink to='/sobre-nosotros' className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Sobre nosotros
                        </NavLink>
                    </li>
                    <li className='liMenu'>
                        <NavLink to='/productos' className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Productos
                        </NavLink>
                    </li>
                    <li className='liMenu'>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin' className={({ isActive }) => isActive ? 'link active' : 'link'}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </NavLink>
                    </li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <Cart isOpen={isCartOpen} onClose={() =>
                            setCartOpen(false)} />
                    </li>
                    {cart.length !== 0 && <div style={{ paddingBottom: '10px' }}><li style={{ fontSize: '12px' }}>{cart.length}</li></div>}

                </ul>

            </nav>
        </header>
    )
}

export default Header
