import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const token = sessionStorage.getItem('token')

  const navigate = useNavigate()

  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const handleSubmit = e => {
    e.preventDefault()

    if ([email, password].includes('')) {
      console.log('Todos los campos son obligatorios')
      toast.warning('Todos los campos son obligatorios')
      return
    }
    if (email !== '' && !regexEmail.test(email)) {
      toast.warning('Debe ingresar un email válido')
      return
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        toast.success('Login success')
        sessionStorage.setItem('token', res.data.token)
      })
      .catch(function(err){
        console.log(err)
        toast.error('Datos no validos')
      })

    setTimeout(() => {
      navigate('/listado')
    }, 4000);

  }

  return (
    <>
      {
        token ? <Navigate to={'/listado'} /> :
        (
          <div className="row">
            <div className="col-6 offset-3">
              <h2>Formulario de Login</h2>
              <form
                onSubmit={handleSubmit}
              >
                <label 
                  className="form-label d-block mt-2"
                  htmlFor="email"
                >
                  <span>Correo Electrónico</span>
                  <input
                    className="form-control"
                    name="email"
                    autoComplete="email"
                    type="email" 
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                  />
                </label>
                <label
                  className="form-label d-block mt-2"
                  htmlFor="password"
                >
                  <span>Contraseña</span>
                  <input 
                    className="form-control"
                    name="password" 
                    autoComplete="current-password" 
                    type="password" 
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                  />
                </label>
                <input 
                  className="btn btn-success mt-2"
                  type="submit" 
                  value="Ingresar" />
              </form>
            </div>
          </div>
        ) 
      }
    </>
  )
}

export default Login