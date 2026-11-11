
import emailjs from '@emailjs/browser'
import './App.css'

function App() {

  function enviarCorreo(e) {
    e.preventDefault()

    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', e.target, 'TU_PUBLIC_KEY')
      .then(() => alert('Mensaje enviado'))
      .catch(() => alert('Error al enviar'))
  }

  return (
    <>
      <h1>Contacto UPATECO</h1>
      <p>Completá el formulario para enviarnos un mensaje.</p>

      <div>
        <form onSubmit={enviarCorreo}>
          <h2>Formulario de contacto</h2>

          <input type='text' name='nombre 'placeholder='Nombre'/>

          <input type='email' name='correo' placeholder='Correo electrónico'/>

          <textarea name='mensaje' placeholder='Escribí tu mensaje'/>

          <button type='submit'>Enviar mensaje</button>
        </form>

        <iframe
          title='Ubicación UPATECO'
          src='https://www.google.com/maps?q=Universidad+UPATECO+Salta&output=embed'
          width='100%'
          height='300'
        />
      </div>
    </>
  )
}

export default App
