import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <main>
      <div className="contenedor">
          <h1 className="titulo">404</h1>
          <p>Página no encontrada</p>
          <button className="boton"><Link className="link" to='/'>Volver Al Inicio</Link></button>
        </div>
      
    </main>

  );
};

export default NotFound;