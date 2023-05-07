import { useState } from 'react'
// import axios from 'axios'
import './login.css'
import { Link, Navigate } from 'react-router-dom'
//mport Profile from '../UserProfile/USerProfile';
import { redirect } from 'react-router-dom'
const Login = () => {
  // const [data, setdata] = useState({});
  const [miLogin, setMiLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const Post = { email, password }
      const URL = 'http://localhost:8080/api/session/login'

      //   const response = () => {
      //     const resp = axios
      //       .post(URL, Post, {
      //         headers: { 'Content-type': 'application/json' },
      //         withCredentials: true
      //       })
      const options = {
        method: 'POST', // O 'PATCH' si corresponde
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
            <button type='submit' className='submit'>
              send
            </button>
            <div className='botones'>
              <Link to='/register' className='submitR'>
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
