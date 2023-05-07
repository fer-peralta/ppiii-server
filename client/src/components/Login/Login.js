import { useState } from 'react'
import './login.css'
import { Link, Navigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { config } from '../../config/config'

const Login = () => {
  const [miLogin, setMiLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const Post = { email, password }
      const URL = `${config.REACT_APP_API_BASE_URL}session/login`

      const options = {
        method: 'POST',
        body: JSON.stringify(Post),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await fetch(URL, options)
        .then(resp => resp.json())
        .then(data => localStorage.setItem('token', data.access_token))
      setMiLogin(true)
      redirect('http://localhost:8080/api/session/profile')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Bienvenido voluntarios Beltran</h1>
      <div className='contenedorLogin'>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <h2 className='title '>Log in</h2>

            <label className='label' htmlFor='username'>
              Email
            </label>
            <input
              className='input'
              type='email'
              name='email'
              value={email}
              placeholder='Ej: usuario@itbeltran.com.ar'
              onChange={e => setEmail(e.target.value)}
            />
            <label className='label' htmlFor='password'>
              Password
            </label>
            <input
              className='input'
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='botones'>
              <button type='submit' className='login-btn'>
                Enviar
              </button>
              <Link to='/register' className='register-btn'>
                Registrar
              </Link>
            </div>
          </form>

          {miLogin === true && <Navigate to='/profile' />}
        </div>
      </div>
    </>
  )
}

export default Login
