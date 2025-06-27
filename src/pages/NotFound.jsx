import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <main>
      <Helmet>
                <title>404</title>
                <meta name="description" content="Página no encontrada" />
              </Helmet>
      <div className="contenedor">
          <h1 className="titulo">404</h1>
          <p>Página no encontrada</p>
          <button className="boton"><Link className="link" to='/'>Volver Al Inicio</Link></button>
        </div>
      
    </main>

  );
};

export default NotFound;