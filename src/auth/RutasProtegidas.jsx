import React from 'react'
import { Navigate } from 'react-router-dom'

const RutasProtegidas = () => {
    if (!isAuthenticated){
        return <Navigate to='/login'></Navigate>
    }
  return (
    <div>
      
    </div>
  )
}

export default RutasProtegidas
