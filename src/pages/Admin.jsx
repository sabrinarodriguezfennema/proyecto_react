import React, { useContext } from "react";
import loadingImagen from '../assets/loading.gif';
import FormularioEdicion from "../components/FormularioEdicion";
import FormularioProducto from "../components/FormularioProducto";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import { AdminContext } from "../context/AdminContext";

const Admin = () => {
    const { setIsAuthenticated, handleAddToCart, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);
    const { productos, loading, open, openEditor, setOpen, setOpenEditor, seleccionado, handleEdit, agregarProducto, actualizarProducto, eliminarProducto} =  useContext(AdminContext)
    const navigate = useNavigate()

   
    return (
        <div>
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
                                <div className="adminNav">
                                    <button className='volver' onClick={() => {
                                        navigate('/');
                                    }}>Volver</button>
                                </div>
                            </li>
                            <li className="navItem">
                                <button className="navButton"  onClick={() => {
                                        setIsAuthenticated(false);
                                        navigate('/');
                                        localStorage.removeItem('isAuthenticated');}}>
                                    <i className="far fa-share-square fa-rotate-180"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="titulo">Panel Administrativo</h1>
                    <input style={{marginTop:'100px', marginLeft:'20px'}} type="text" placeholder='Buscar producto...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

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
                                    <button className="editButton" onClick={() => {
                                        handleEdit(product);
                                    }}>Editar</button>
                                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
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