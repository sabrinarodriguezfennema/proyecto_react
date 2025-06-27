import React, { useContext } from "react";
import loadingImagen from '../assets/loading.gif';
import FormularioEdicion from "../components/FormularioEdicion";
import FormularioProducto from "../components/FormularioProducto";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { Helmet } from 'react-helmet-async';

const Admin = () => {
    const { setIsAuthenticated, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);
    const { loading, open, openEditor, setOpen, setOpenEditor, seleccionado, handleEdit, agregarProducto, actualizarProducto, eliminarProducto } = useContext(AdminContext)
    const navigate = useNavigate()


    return (
        <div>
            <Helmet>
                <title>Panel de Administración | Feel Pretty</title>
                <meta name="description" content="Administrá productos, pedidos y usuarios desde el panel de control de Feel Pretty." />
            </Helmet>
            {loading ? (
                <img
                    src={loadingImagen}
                    alt="loading"
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '9999',
                        width: '50px',
                        height: '50px'
                    }}
                />
            ) : (

                <div className="container">

                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <div>
                                    <button className='volver' aria-label="Volver al inicio" onClick={() => {
                                        navigate('/');
                                    }}> <i className="fas fa-undo-alt"></i></button>
                                </div>
                            </li>
                            <li className="navItem">
                                <button className="navButton" aria-label="Cerrar sesión" onClick={() => {
                                    setIsAuthenticated(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuthenticated');
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="titulo">Panel Administrativo</h1>
                    <div className="contenedorBuscador">
                        <input className="buscador" type="text" placeholder='Buscar producto...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} /> <i className="fas fa-search"></i>
                    </div>
                    <ul className="list">
                        {productosFiltrados.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton" aria-label="Editar producto" onClick={() => {
                                        handleEdit(product);
                                    }}><i className="fas fa-edit"></i></button>
                                    <button className="deleteButton" aria-label="Eliminar producto" onClick={() => eliminarProducto(product.id)}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {!open && (
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <button className="botonAbrirFormulario" onClick={() => setOpen(true)}>Agregar producto</button>
                        </div>
                    )}

                    {open && (
                        <FormularioProducto onAgregar={agregarProducto} setOpen={setOpen} />
                    )}

                    {openEditor && (

                        <FormularioEdicion seleccionado={seleccionado} onActualizar={actualizarProducto} setOpenEditor={setOpenEditor} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Admin;