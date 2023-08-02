import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from '../../../config/config'
import { options } from './Login.fetchOptions'
import { loginErrorToast } from '../../../services/toastifyNotifications/notifications'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const navigate = useNavigate()

  const validateEmail = value => {
    if (!value.includes('@itbeltran.com.ar')) {
      setEmailError('El correo electrónico debe incluir @itbeltran.com.ar')
    } else {
      setEmailError('')
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     if (localStorage.getItem('token').length > 0) {
  //       navigate('./mentories')
  //     }
  //   }
  // }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const post = { email, password }
      const URL = `${config.REACT_APP_API_BASE_URL}session/login`

      await fetch(URL, options(post)).then(resp => {
        resp.json().then(data => {
          if (data.error) {
            console.warn(data)
            loginErrorToast()
          } else {
            localStorage.setItem('token', data.access_token)
            navigate('../mentories')
          }
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='title-login-page'>Bienvenido a Voluntarios Beltrán</h1>
      <div className='login-container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h2 className='login-title '>Log in</h2>
            <label className='label' htmlFor='loginEmail'>
              Email
            </label>
            <input
              className='input'
              required={true}
              type='email'
              name='email'
              id='loginEmail'
              value={email}
              placeholder='usuario@itbeltran.com.ar'
              onChange={e => {
                setEmail(e.target.value)
                validateEmail(e.target.value)
              }}
            />
            {emailError && (
              <p style={{ color: 'red', border: '1px solid #1a202c' }}>
                {emailError}
              </p>
            )}

            <label className='label' htmlFor='passwordLogin'>
              Password
            </label>
            <input
              required={true}
              className='input'
              type='password'
              name='password'
              id='passwordLogin'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='botones'>
              <button type='submit' className='login-btn'>
                Enviar
              </button>
              <button type='button' className='register-btn'>
                <Link to='/register'>Registrar</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
