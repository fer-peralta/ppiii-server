import { useState } from 'react'
import './login.css'
import { Link, Navigate } from 'react-router-dom'
//import { redirect } from 'react-router-dom'
import { config } from '../../../config/config'

const Login = () => {
  const [miLogin, setMiLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = value => {
    if (!value.includes('@itbeltran.com.ar')) {
      setEmailError('El correo electrónico debe incluir @itbeltran.com.ar')
    } else {
      setEmailError('')
    }
  }
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

      await fetch(URL, options).then(resp => {
        resp.json().then(data => {
          localStorage.setItem('token', data.access_token)
          data.access_token
            ? setMiLogin(true)
            : console.error('Usuario incorrecto')
        })
      })
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
              required={true}
              type='email'
              name='email'
              value={email}
              placeholder='Ej: usuario@itbeltran.com.ar'
              onChange={e => {
                setEmail(e.target.value)
                validateEmail(e.target.value)
              }}
            />
            {emailError && (
              <div style={{ color: 'red', border: '1px solid #1a202c' }}>
                {emailError}
              </div>
            )}

            <label className='label' htmlFor='password'>
              Password
            </label>
            <input
              required={true}
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

          {miLogin === true && <Navigate to='/mentories' />}
        </div>
      </div>
    </>
  )
}

export default Login
