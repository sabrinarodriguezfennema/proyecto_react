import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetch('https://6818fb385a4b07b9d1d19231.mockapi.io/productos-ecommerce/productos')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
    }, []);

    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const handleAddToCart = (producto, cantidad) => {

        const productInCart = cart.find((item) => item.id === producto.id);
        if (productInCart) {
            console.log('productoEnCarrito');
            if (producto.stock >= (cantidad + productInCart.quantity)) {
                console.log(cantidad);
                console.log(producto.precio);
                console.log(productInCart.precio);
                console.log(productInCart.precio + (cantidad * producto.precio));
                setCart(cart.map((item) => item.id === producto.id
                    ? { ...item, quantity: item.quantity + cantidad, precio: item.precio + (cantidad * producto.precio) }
                    : item)
                )
            }
            else {
                alert('No hay stock suficiente')
            }
        }
        else {
            console.log('nohayproductoEnCarrito');
            console.log(cantidad);
            console.log(producto.precio);
            toast.success(`El producto ${producto.nombre} se ha agregado al carrito`);
            if (producto.stock >= cantidad) {
                setCart([...cart, { ...producto, quantity: cantidad, precio: producto.precio * cantidad }])
            }
            else {
                alert('No hay stock suficiente')
            }
        }
    }

    const handleDeleteFromCart = (producto) => {
        if (cart.find(item => item.id === producto.id)?.quantity === 1) {
            toast.error(`El producto ${producto.nombre} se ha eliminado al carrito`);
        }
        setCart(prevCart => {
            return prevCart
                .map(item => {
                    if (item.id === producto.id) {
                        const unitPrice = item.precio / item.quantity;
                        if (item.quantity > 1) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                precio: item.precio - unitPrice
                            };
                        } else {
                            return null;
                        }
                    } else {
                        return item;
                    }
                })
                .filter(item => item !== null);

        });
    };


    return (

        <CartContext.Provider
            value={
                { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuthenticated, productosFiltrados, busqueda, setBusqueda }
            }>
            {children}

        </CartContext.Provider>
    )
}

