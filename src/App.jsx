import './App.css'

function App() {

  function enviarCorreo(e) {
    e.preventDefault()
    window.location.href = 'mailto:vaninaorellana89@gmail.com'
  }

  return (
    <>
      <h1>Contacto UPATECO</h1>
      <p>Completá el formulario para enviarnos un mensaje.</p>

      <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
        <form onSubmit={enviarCorreo}>
          <h2>Formulario de contacto</h2>

          <input type='text' name='nombre 'placeholder='Nombre' style={{padding: '8px', margin: '5px', color: 'black'}} />

          <input type='email' name='correo' placeholder='Correo electrónico' style={{padding: '8px', margin: '5px', color: 'black'}}/>

          <textarea name='mensaje' placeholder='Escribí tu mensaje' style={{padding: '8px', margin: '5px', color: 'black'}}/>

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
