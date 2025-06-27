import React, { useState, useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './styles/Formulario.css'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet-async';

const Contactos = () => {
	const { cargando } = useContext(CartContext)
	const [datos, setDatos] = useState({});
	const [errores, setErrores] = useState({});

	const handleDatosFormulario = (nombrePropiedad, valor) => {
		const datosAux = { ...datos, [nombrePropiedad]: valor };
		setDatos(datosAux);
	};

	const validarFormulario = () => {
		const { nombre, email, telefono, mensaje } = datos;
		const nuevosErrores = {};

		const nombreRegex = /^[a-zA-Z]+$/;
		if (!nombre || !nombreRegex.test(nombre)) {
			nuevosErrores.nombre = !nombre ? 'El nombre es obligatorio.' : 'Ingrese un nombre válido.';
		}

		const telefonoRegex = /^[0-9]+$/;
		if (!telefono || !telefonoRegex.test(telefono)) {
			nuevosErrores.telefono = !telefono ? 'El teléfono es obligatorio.' : 'Ingrese un número válido.';
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email)) {
			nuevosErrores.email = !email ? 'El email es obligatorio.' : nuevosErrores.email = 'Ingrese un email válido.';
		}

		if (!mensaje || mensaje.length < 10) {
			nuevosErrores.mensaje = 'El mensaje debe contener al menos 10 caracteres.';
		}

		setErrores(nuevosErrores);

		if (Object.keys(nuevosErrores).length === 0) {
			alert('Formulario enviado correctamente.');

		}
	};



	return (
		<div>
			<Helmet>
				<title>Contacto | Feel Pretty</title>
				<meta name="description" content="¿Tenés preguntas? Contactanos y nuestro equipo te responderá a la brevedad." />
			</Helmet>
			<Header />
			<div>
			<main className='contentContacto'>
				{cargando ? <img src={loading} alt='loading' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', width: '50px', height: '50px' }} /> :


					<div className='principalContactos'>
						<div className='boxContacto'>
							<h3 style={{ textAlign: 'left', fontSize: '25px', paddingBottom: '10px' }}>Encontranos</h3>
							<ul className='contenedor'>
								<li className='contacto'><i className='fa-solid fa-phone'></i> Teléfono: (+54) 11 2233-4455</li>
								<li className='contacto'><i className='fa-solid fa-envelope'></i> Correo electrónico: FeelPretty@gmail.com</li>
								<li className='contacto'><i className='fa-solid fa-bell'></i> Horarios de Atencion: 10 a 18 hs </li>
								<li className='contacto'><i className='fa-solid fa-location-dot'></i> Localidad: Avellaneda, Buenos Aires. </li>

							</ul>
							<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26253.885738856636!2d-58.388026545838066!3d-34.661376717721446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335230bd052b%3A0x9d632a18eea90a31!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1747668757010!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' frameBorder='0' className='mapa'></iframe>
						</div>

						<div className='boxContacto'>

							<form className='principalFormulario' id='miFormulario'>
								<div className='box'>
									<label htmlFor='nombre'> Nombre</label>
									<input type='text' id='nombre' className='items' onChange={(e) => handleDatosFormulario(e.target.id, e.target.value)} />
									{errores.nombre && <small className="colorMensajeError">{errores.nombre}</small>}

								</div>
								<div className='box'>
									<label htmlFor='email'> Email</label>
									<input type='email' id='email' className='items' onChange={(e) => handleDatosFormulario(e.target.id, e.target.value)} />
									{errores.email && <small className="colorMensajeError">{errores.email}</small>}

								</div>
								<div className='box'>
									<label htmlFor='numero'> Telefono</label>
									<input type='text' id='telefono' className='items' onChange={(e) => handleDatosFormulario(e.target.id, e.target.value)} />
									{errores.telefono && <small className="colorMensajeError">{errores.telefono}</small>}


								</div>
								<div className='box'>
									<label htmlFor='mensaje'> Ingrese su mensaje</label>
									<textarea name='mensaje' id='mensaje' className='itemMensaje' onChange={(e) => handleDatosFormulario(e.target.id, e.target.value)}></textarea>
									{errores.mensaje && <small className="colorMensajeError">{errores.mensaje}</small>}


								</div>
								<div>
									<input type='submit' value='Enviar' className='boton' onClick={(e) => {
										e.preventDefault();
										validarFormulario();
									}} />
								</div>
							</form>
						</div>
					</div>
				}
			</main>
			<Footer />
			</div>
		</div>
	)
}

export default Contactos
