import React, { useMemo, useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
	 const {cart, agregarCarrito, quitarCarrito } = useContext(CartContext)
	
	const totalValue = useMemo(() => {
		const precios = cart.map((item) => item.precio);
		const totalAux = precios.reduce((acumulador, numero) => acumulador + numero, 0);
		return totalAux;
	}, [cart]);

	return (
		<div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
			<div className='cart-header'>
				<h2 style={{ color: 'black' }}>Carrito de compras</h2>
				<button onClick={onClose} className='close-button'><i className="fa-solid fa-xmark"></i></button>
			</div>
			<div className='cart-content'>

				{cart.length === 0 ? (<p style={{ color: 'red' }}>El carrito esta vacio</p>) :
					(
						<div>
							<ul className='cart-item'>
								{cart.map((item, index) => (
									<div key={index} >
										<li key={item.id} style={{ fontSize: '15px', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }} >
											<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
												<div >
													<p>{item.nombre} </p>
												</div>
												<div><p>- ${item.precio}</p></div>
											</div>



											<div style={{ display: 'flex', flexDirection: 'row' , fontSize:'13px', border: '0.5px solid #00000096'}}>
												<button className='qtyButton' onClick={() => quitarCarrito(item)}>-</button>
												<p className='cantidadProducto'>{item.quantity}</p>
												<button className='qtyButton' onClick={() => agregarCarrito(item, 1)}>+</button>
											</div>
										</li>
									</div>))}
							</ul>
							<h3 style={{marginTop:'20px', textAlign: 'end'}} >Total ${totalValue}</h3>
						</div>

					)}
			</div>
		</div>
	)
}

export default Cart
