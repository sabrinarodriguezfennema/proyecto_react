import React, { useState, useEffect, useContext } from "react";
import loadingImagen from '../assets/loading.gif';
import { Link } from "react-router-dom";
import FormularioEdicion from "../components/FormularioEdicion";
import FormularioProducto from "../components/FormularioProducto";
import { CartContext } from "../context/CartContext";

const Admin = () => {
    const { setIsAuthenticated } = useContext(CartContext)
    const [productos, setProductos] = useState([]);
    const apiUrl = "https://6818fb385a4b07b9d1d19231.mockapi.io/productos-ecommerce/productos";
    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);
    // useEffect(() => {
    //     if (seleccionado) {
    //         setOpenEditor(true);
    //     }
    // }, [seleccionado]);

    const handleEdit = (product) => {
        setSeleccionado(product);
        setOpenEditor(true);
        console.log(product)
    }


    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.log('Error al cargar productos', error);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!respuesta.ok) {
                throw new Error('Error al agregar el producto');
            }
            await respuesta.json();
            alert('Producto agregado correctamente');
            setOpen(false);
            cargarProductos();
        } catch (error) {
            console.log(error.message);
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const res = await fetch(`${apiUrl}/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!res.ok) throw new Error('Error al actualizar el producto');
            const data = await res.json();
            alert('Producto actualizado correctamente');
            setOpenEditor(false);
            setSeleccionado(null);
            cargarProductos();
        } catch (error) {
            console.log(error.message);
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('¿Estás seguro de eliminar el producto?');
        if (confirmar) {
            try {
                const respuesta = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                });
                if (!respuesta.ok) throw new Error('Error al eliminar');
                alert('Producto eliminado correctamente');
                cargarProductos();
            } catch (error) {
                alert('Hubo un problema al eliminar el producto');
                console.error(error);
            }
        }
    };

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
                                        setIsAuthenticated(false);
                                        navigate('/');
                                        localStorage.removeItem('isAuthenticated');
                                    }}><Link style={{
                                        textDecoration: 'none'
                                    }} to='/'  >Volver</Link></button>
                                </div>
                            </li>
                            <li className="navItem">
                                <button className="navButton" >
                                    <a href="/admin"><i className="far fa-share-square fa-rotate-180"></i></a>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="titulo">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
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