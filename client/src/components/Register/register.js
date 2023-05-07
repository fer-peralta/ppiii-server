import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import '../Register/register.css'
import { config } from '../../config/config'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [adress, setAdress] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const Post = { email, password, name, surname, adress, age, phone }
      const URL = `${config.REACT_APP_API_BASE_URL}session/signup`

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
      redirect('http://localhost:8080/')
      alert('Registro exitoso.')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className='contenedorLogin'>
        <form onSubmit={handleSubmit} className='form'>
          <h2 className='title '>Registro</h2>
          <label className='label' htmlFor='Nombre'>
            Email
          </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor='Surname'>Surname</label>
          <input
            type='text'
            name='surname'
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />

          <label htmlFor='adress'>Adress</label>
          <input
            type='text'
            name='adress'
            value={adress}
            onChange={e => setAdress(e.target.value)}
          />

          <label htmlFor='age'>age</label>
          <input
            type='number'
            name='age'
            value={age}
            onChange={e => setAge(e.target.value)}
          />

          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button type='submit' className='submit'>
            send
          </button>
          <Link to='/' className='submit'>
            Ir a Log in
          </Link>
        </form>
      </div>
    </>
  )
}

export default Register
