import React, { useContext } from 'react'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'


const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, error } = useAuth();
  const { cargando } = useContext(CartContext);
  return (
    <div>
      <Helmet>
        <title>Iniciar Sesión | Feel Pretty</title>
        <meta name="description" content="Accedé a tu cuenta para comprar, ver tus pedidos o administrar Feel Pretty." />
      </Helmet>
      {
              cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :
      <div className='contenedorForm'>

        <form onSubmit={handleSubmit} className='form'>
          <div><Link to='/' className='link' aria-label="Volver a inicio"> <i className="fas fa-undo-alt"></i> </Link></div>
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
      </div>}
    </div>
  );
};

export default Login;