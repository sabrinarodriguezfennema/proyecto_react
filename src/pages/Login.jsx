import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, error } = useAuth()
  return (
    <div className='contenedorForm'>

      <form onSubmit={handleSubmit} className='form'>
        <div><Link to='/' className='link'><i className="far fa-share-square fa-rotate-180"></i></Link></div>
        <h2 className='tituloform'>Iniciar Sesión</h2>

        <div>
          <label htmlFor="email" className='label'>Email</label>
          <input
            id="email"
            type="email"
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <div className='error'>{error.email}</div>}
        </div>

        <div>
          <label htmlFor="password" className='label'>Contraseña</label>
          <input
            id="password"
            type="password"
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <div className='error'>{error.password}</div>}
        </div>

        <button type="submit" className='botonSubmit'>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;