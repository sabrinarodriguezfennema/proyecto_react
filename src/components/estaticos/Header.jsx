import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import logo from '../../assets/logo.jpg'
import { CartContext } from '../../context/CartContext'

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false);

    const [isMenuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);

    return (
        <header>
            <nav className="navegacion">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
                <div className='navegacionMenu'>
                    <div>
                        <button className="menu-button" onClick={() => setMenuOpen(!isMenuOpen)}>
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        {/* Drawer del menú mobile */}
                        <ul className={`drawer-menu ${isMenuOpen ? 'open' : ''}`}>
                            <button className="btn-close" onClick={() => setMenuOpen(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <li className="liMenu">
                                <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'link active' : 'link'}>Inicio</NavLink>
                            </li>
                            <li className="liMenu">
                                <NavLink to="/sobre-nosotros" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'link active' : 'link'}>Sobre nosotros</NavLink>
                            </li>
                            <li className="liMenu">
                                <NavLink to="/productos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'link active' : 'link'}>Productos</NavLink>
                            </li>
                            <li className="liMenu">
                                <NavLink to="/contacto" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'link active' : 'link'}>Contacto</NavLink>
                            </li>
                            <li className="liMenu">
                                <NavLink to="/admin" aria-label="Ir a admin" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'link active' : 'link'}>
                                    <i className="fas fa-user-alt"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="cartnav">
                        <button className="btnCart" aria-label="Abrir carrito" onClick={() => setCartOpen(true)}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        {cart.length !== 0 && (
                            <span className="cart-count">{cart.length}</span>
                        )}
                        <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header
