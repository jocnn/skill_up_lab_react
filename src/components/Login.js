const Login = () => {
  return (
    <>
      <h2>Formulario de Login</h2>
      <form>
        <label htmlFor="email">
          Correo Electrónico
          <input
            name="email"
            autoComplete="email"
            type="email" />
        </label>
        <label htmlFor="password">
          Contraseña
          <input 
            name="password" 
            autoComplete="current-password" 
            type="password" />
        </label>
        <input 
          type="submit" 
          value="Ingresar" />
      </form>
    </>
  )
}

export default Login