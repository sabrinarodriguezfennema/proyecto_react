import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import loading from '../assets/loading.gif'

const NotFound = (cargando) => {
  return (
    <main>
      {cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :
        <div>
          <h1>404</h1>
          <button><Link to='/'>Volver Al Inicio</Link></button>
        </div>
      }
    </main>

  );
};

export default NotFound;