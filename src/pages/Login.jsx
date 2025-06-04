import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = () => {
  const { setIsAuthenticated } = useContext(CartContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === true
    if (isAuthenticated){
      setIsAuthenticated(true)
      navigate ('/admin')
    }
  },[])
  
 const handleSubmit = async (e) => {
  e.preventDefault()

  const validationErrors = {}
  if (!email) validationErrors.email = 'Email es requerido'
  if (!password) validationErrors.password = 'La contraseña es requerida'

  if (Object.keys(validationErrors).length > 0) {
    setError(validationErrors)
    return
  }

  try {

    const res = await fetch('/data/users.json') 
    const users = await res.json()

    const foundUser = users.find((user) => user.email === email && user.password === password)

    if (!foundUser) {
      setError({ email: 'Credenciales inválidas' })
    } else {
      if (foundUser.role === 'admin') {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', true);
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  } catch (err) {
    setError({
      email: 'Algo salió mal. Por favor, inténtalo más tarde',
    })
  }
}



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