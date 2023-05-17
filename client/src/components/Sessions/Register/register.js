import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import './register.css'
import { config } from '../../../config/config'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [adress, setAdress] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [miregister, setMiregister] = useState(false)

  const navigate = useNavigate()

  const validateEmail = value => {
    if (!value.includes('@itbeltran.com.ar')) {
      setEmailError('El correo electrónico debe incluir @itbeltran.com.ar')
    } else {
      setEmailError('')
    }
  }
  const validateAge = value => {
    const ageValue = Number(value)
    if (ageValue < 18 || ageValue > 65) {
      setAgeError('La edad debe estar entre 18 y 65 años')
    } else {
      setAgeError('')
    }
  }
  const validatePhone = value => {
    if (value.length < 10) {
      setPhoneError('El telefono debe tener 10 o mas digitos')
    } else {
      setPhoneError('')
    }
  }

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
      await fetch(URL, options).then(resp => {
        resp.json().then(data => {
          localStorage.setItem('token', data.access_token)
          data.message ===
          'There was an error: ReferenceError: error is not defined'
            ? setMiregister(false)
            : navigate('/profile')
        })
      })

      // const responsePost = await fetch(URL, options)

      //   .then(resp => resp.json())
      //   .then(data => localStorage.setItem('token', data.access_token))
      // data.message ? setMiregister(true) : console.error("Usuario incorrecto")
      // if (responsePost.message === "User sign up with success") {
      //   alert('Registro exitoso.')
      //
      // }
    } catch (error) {
      console.error(error)
    }
    // finally {
    //   alert('Registro exitoso.')

    // }
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
            required={true}
            type='email'
            name='email'
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            required={true}
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            required={true}
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor='Surname'>Surname</label>
          <input
            type='text'
            required={true}
            name='surname'
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />

          <label htmlFor='adress'>Adress</label>
          <input
            type='text'
            required={true}
            name='adress'
            value={adress}
            onChange={e => setAdress(e.target.value)}
          />

          <label htmlFor='age'>Age</label>
          <input
            type='number'
            required={true}
            name='age'
            value={age}
            onChange={e => {
              setAge(e.target.value)
              validateAge(e.target.value)
            }}
          />
          {ageError && <div style={{ color: 'red' }}>{ageError}</div>}

          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            required={true}
            name='phone'
            minLength={10}
            value={phone}
            onChange={e => {
              setPhone(e.target.value)
              validatePhone(e.target.value)
            }}
          />
          {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
          <button type='submit' className='submit'>
            Registrar
          </button>
          <Link to='/' className='submit'>
            Ir a Log in
          </Link>
        </form>
      </div>
      {miregister === true && <Navigate to='/profile' />}
    </>
  )
}

export default Register
