import React, {useState} from 'react'
import './styleEstatico.css'
const Footer = () => {
    const [emails, setEmails] = useState({});
    const [errores, setErrores] = useState({});

    const handleMail = (nombrePropiedad, valor) => {
		    const emailAux = { ...emails, [nombrePropiedad]: valor };
		    setEmails(emailAux);
	};

  const validarMail= () => {
		const {emailSusc} = emails;
		const nuevosErrores = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailSusc || !emailRegex.test(emailSusc)) {
			nuevosErrores.emailSusc = !emailSusc ? 'El email es obligatorio.': nuevosErrores.emailSusc = 'Ingrese un email válido.';
		} 

		setErrores(nuevosErrores);

		if (Object.keys(nuevosErrores).length === 0) {
			alert('Gracias por suscribirte');
		}
	};
  return (
    <footer>
      <div className='contenedorFooter'>

        <div className='item'>
          <div className='subitem'>
            <h3 className='titulos'>ENCONTRANOS</h3>
            <address className='parrafo'>
              <p>Dirección: Avellaneda, Buenos Aires.</p>
              <p>Teléfono: (+54) 11 2233-4455</p>
              <p>Correo electrónico: FeelPretty@gmail.com</p>
            </address>
          </div>
        </div>
        <div className='item'>
          <div className='subitem'>
            <h3 className='titulos'>SUSCRIBITE A NUESTRO NEWSLETTER</h3>
            <form className='suscribite' id='formSuscribite'>
              <input type='email' placeholder='Ingresa tu correo electrónico' id='emailSusc' name='emailSusc' className='box' onChange={(e) => handleMail(e.target.id, e.target.value)} />
							{errores.emailSusc && <small style={{color: 'red', fontSize: '10px'}}>{errores.emailSusc}</small>}
              <input type='submit' value='Suscribirse' className='boton' onClick={(e) => {	
																						e.preventDefault();
    																					validarMail();}} />
              
            </form>
          </div>
          </div>
          <div className='item'>
            <div className='subitem'>
              <h3 className='titulos'>SEGUINOS</h3>
              <nav>
                <ul className='ulFooter'>
                  <li><a href='https://www.instagram.com'>
                    <i className='fa-brands fa-instagram'></i>
                  </a></li>
                  <li><a href='https://web.facebook.com/'>
                    <i className='fa-brands fa-square-facebook'></i>
                  </a></li>
                  <li>
                    <a href='https://x.com/?lang=es'>
                      <i className='fa-brands fa-twitter'></i>

                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
      <p>&copy;2025 - Mi tienda online</p>
    </footer>
  )
}

export default Footer
