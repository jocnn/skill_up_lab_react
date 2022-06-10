import { useState } from "react"

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const handleSubmit = e => {
    e.preventDefault()

    if ([email, password].includes('')) {
      console.log('Todos los campos son obligatorios')
      return
    }
    if (email !== '' && !regexEmail.test(email)) {
      console.log('Debe ingresar un email válido')
      return
    }
  }

  return (
    <>
      <h2>Formulario de Login</h2>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          Correo Electrónico
          <input
            name="email"
            autoComplete="email"
            type="email" 
            value={email}
            onChange={ e => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Contraseña
          <input 
            name="password" 
            autoComplete="current-password" 
            type="password" 
            value={password}
            onChange={ e => setPassword(e.target.value) }
          />
        </label>
        <input 
          type="submit" 
          value="Ingresar" />
      </form>
    </>
  )
}

export default Login