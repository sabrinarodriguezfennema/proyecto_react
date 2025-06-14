import {createContext, useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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

    if (!!email & !foundUser) {
      setError({ email: 'Credenciales inválidas' })
    } else {
      if (foundUser.role === 'admin') {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', true);
        navigate('/admin');
        setEmail('');
        setPassword('');
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
    <AuthContext.Provider value={{email, setEmail, password, setPassword, handleSubmit, error}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);