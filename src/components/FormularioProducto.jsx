import React, { useState } from 'react'
import './styleFormulario.css'

const FormularioProducto = ({ onAgregar, setOpen }) => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        detalle: '',
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.detalle.trim() || producto.detalle.length < 5) {
            nuevosErrores.detalle = 'La detalle debe tener al menos 5 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto);
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            imagen: '',
            detalle: '',
        });
    };
    return (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='contenedorForm'>
                    <div style={{ backgroundColor: 'white', margin: '0px 50px', borderRadius: '20px' }}>
                        <div className='contenedorBotonCerrar'>
                            <button className='botonCerrar' onClick={() => setOpen(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className='contenedorFormularioAgregar'>
                            <div className="formularioAgregar">
                                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                                    <h2 className="formulario-titulo">Agregar producto</h2>

                                    <div className="formulario-campo">
                                        <label>Nombre:</label>
                                        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
                                        {errores.nombre && <p className="error">{errores.nombre}</p>}
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Precio:</label>
                                        <input type="number" name="precio" value={producto.precio} onChange={handleChange} required />
                                        {errores.precio && <p className="error">{errores.precio}</p>}
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Stock:</label>
                                        <input type="number" name="stock" value={producto.stock} onChange={handleChange} required />
                                        {errores.stock && <p className="error">{errores.stock}</p>}
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Imagen URL:</label>
                                        <textarea name="imagen" value={producto.imagen} onChange={handleChange} required />
                                        {errores.imagen && <p className="error">{errores.imagen}</p>}
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Detalle:</label>
                                        <textarea name="detalle" value={producto.detalle} onChange={handleChange} required />
                                        {errores.detalle && <p className="error">{errores.detalle}</p>}
                                    </div>
                                    <div className="formulario-campo"  >
                                        <button className="formulario-boton" type="submit">Agregar producto</button></div>

                                </form>
                            </div>
                            <div className="vistaPrevia">

                                <h2 className='formulario-titulo'>Vista previa</h2>
                                <section className='card'>

                                    <div className='imagenContainer'>
                                        <img src={producto.imagen || null} alt="" className='imagen' />
                                    </div>
                                    <div className='datosProductos'>
                                        <h3 className='nombre'>{producto.nombre}</h3>
                                        <div className='contenedorPrecioYAgregar'>
                                            <p className='precio'>${producto.precio}</p>
                                            <p className='stock'>Stock: {producto.stock}</p>
                                            <p className='botonAgregar' >Agregar</p>
                                        </div>
                                        <p className='botonVerMas'>Ver mas</p>

                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FormularioProducto
