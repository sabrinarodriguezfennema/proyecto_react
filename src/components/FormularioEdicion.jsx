import React, { useState, useEffect } from 'react'
import './styleFormulario.css'

const FormularioEdicion = ({ seleccionado, onActualizar, setOpenEditor }) => {
    const [producto, setProducto] = useState(seleccionado);

    useEffect(() => {
        setProducto(seleccionado)
    }, [seleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    const handleCloseModal = () => {
        setOpenEditor(false);
        setProducto(null);
    }

    return (
        <div className="modal-overlay" onClick={() => handleCloseModal()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='contenedorForm'>
                    <div style={{ backgroundColor: 'white', margin: '0px 50px', borderRadius: '20px' }}>
                        <div className='contenedorBotonCerrar'>
                            <button className='botonCerrar' onClick={() => handleCloseModal()}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className='contenedorFormularioAgregar'>
                            <div className="formularioAgregar">
                                <form style={{ width: '100%' }} onSubmit={(e) => {
                                    e.preventDefault()
                                    onActualizar(producto)
                                }}>
                                    <h2 className="formulario-titulo">Editar producto</h2>

                                    <div className="formulario-campo">
                                        <label>ID:</label>
                                        <input
                                            type="number"
                                            name="id"
                                            value={producto.id || ''}
                                            onChange={handleChange}
                                            readOnly
                                        />
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Nombre:</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={producto.nombre || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="formulario-campo">
                                        <label>Precio:</label>
                                        <input
                                            type="number"
                                            name="precio"
                                            value={producto.precio || ''}
                                            onChange={handleChange}
                                            required
                                            min="0"
                                        />
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Stock:</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={producto.stock || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Imagen URL:</label>
                                        <input
                                            type="text"
                                            name="imagen"
                                            value={producto.imagen || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="formulario-campo">
                                        <label>Detalle:</label>
                                        <textarea
                                            name="detalle"
                                            value={producto.detalle || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="formulario-campo"  >
                                        <button className="formulario-boton" type="submit">Actualizar producto</button></div>

                                </form>
                            </div>
                            <div className="vistaPrevia">

                                <h2 className='formulario-titulo'>Vista previa</h2>
                                <section className='card'>

                                    <div className='imagenContainer'>
                                        <img src={producto.imagen} alt="" className='imagen' />
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
};

export default FormularioEdicion;
