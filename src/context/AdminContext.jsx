import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
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

    const handleEdit = (product) => {
        setSeleccionado(product);
        setOpenEditor(true);
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
        <AdminContext.Provider value={{productos, loading, open, openEditor, setOpen, setOpenEditor, seleccionado, setSeleccionado, agregarProducto, actualizarProducto, eliminarProducto, handleEdit}}>
            {children}
        </AdminContext.Provider>
    )
}