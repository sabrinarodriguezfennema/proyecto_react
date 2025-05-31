import React, { useState, useEffect } from "react";
import loadingImagen from '../assets/loading.gif'
import { Link } from "react-router-dom";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            {loading ? <img src={loadingImagen} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px'}} /> :  (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <Link className="link" to='/'><i className="fa-solid fa-right-from-bracket"> </i></Link>
                                </button>
                            </li>
                            <li className="navItem">
                                <a className="adminNav" href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="titulo">Panel Administrativo</h1>
                    <form className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre del producto"
                            className="input"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Precio del producto"
                            className="input"
                            required
                        />
                        <button type="submit" className="button">
                            {form.id ? "Editar" : "Crear"}
                        </button>
                    </form>
                    <ul className="list">
                        {products.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>

                                    <button className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Admin;
