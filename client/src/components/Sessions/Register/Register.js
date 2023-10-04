import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from '../../../config/config'
import { options } from './Register.fetchOptions'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [adress, setAdress] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [selectGender, setSelectGender] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [phoneError, setPhoneError] = useState('')

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
    if (ageValue < 18 || ageValue > 100) {
      setAgeError('La edad debe estar entre 18 y 100 años')
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
    let hasLetter = /[qwertyuiopasdfghjklñzxcvbnm]/.test(value)
    hasLetter && setPhoneError('Debe ingresar un teléfono válido')
  }

  const otherGender = () => {
    if (
      gender !== 'femenino' &&
      gender !== 'masculino' &&
      gender !== 'prefiero no decirlo' &&
      gender !== ''
    ) {
      return (
        <input
          type='text'
          required={true}
          name='otherGender'
          id='otherGenderReg'
          placeholder='Por favor ingrese el género'
          onChange={e => {
            if (selectGender === false && e.target.value.length > 0) {
              setSelectGender(true)
            } else {
              setSelectGender(false)
            }
            setGender(`otro: ${e.target.value}`)
          }}
        />
      )
    } else {
      if (selectGender === true) {
        setSelectGender(false)
      }
      return ''
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const post = { email, password, name, surname, adress, age, phone }
      if (gender !== '') {
        post.gender = gender
      }
      const URL = `${config.REACT_APP_API_BASE_URL}session/signup`

      await fetch(URL, options(post)).then(resp => {
        resp.json().then(data => {
          console.log(data)
          !data.error && navigate('/post-register')
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='title-login-page'>Bienvenido a Voluntarios Beltrán</h1>
      <div className='contenedorRegister'>
        <form onSubmit={handleSubmit}>
          <h2 className='title'>Registro</h2>
          <label htmlFor='emailReg'>*Email</label>
          <input
            required={true}
            type='email'
            name='email'
            id='emailReg'
            placeholder='usuario@itbeltran.com.ar'
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          <label htmlFor='passwordReg'>*Contraseña</label>
          <input
            type='password'
            required={true}
            name='password'
            id='passwordReg'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor='genderReg'>Género</label>
          <select
            id='genderReg'
            name='gender'
            required={false}
            value={gender}
            disabled={selectGender}
            onChange={e => {
              setGender(e.target.value)
            }}
          >
            <option disabled={true}></option>
            <option name='femenino' value='femenino'>
              Femenino
            </option>
            <option name='masculino' value='masculino'>
              Masculino
            </option>
            <option name='otro' value='otro'>
              Otro
            </option>
            <option name='prefiero no decirlo' value='prefiero no decirlo'>
              Prefiero no decirlo
            </option>
          </select>

          {otherGender()}

          <label htmlFor='nameReg'>*Nombre</label>
          <input
            type='text'
            required={true}
            name='name'
            id='nameReg'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor='surnameReg'>*Apellido</label>
          <input
            type='text'
            required={true}
            name='surname'
            id='surnameReg'
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />

          <label htmlFor='adressReg'>*Dirección</label>
          <input
            type='text'
            required={true}
            name='adress'
            id='adressReg'
            value={adress}
            onChange={e => setAdress(e.target.value)}
          />

          <label htmlFor='ageReg'>*Edad</label>
          <input
            type='number'
            required={true}
            min={18}
            max={100}
            name='age'
            id='ageReg'
            value={age}
            onChange={e => {
              setAge(e.target.value)
              validateAge(e.target.value)
            }}
          />
          {ageError && <div style={{ color: 'red' }}>{ageError}</div>}

          <label htmlFor='phoneReg'>*Teléfono</label>
          <input
            type='text'
            required={true}
            name='phone'
            id='phoneReg'
            minLength={10}
            value={phone}
            onChange={e => {
              setPhone(e.target.value)
              validatePhone(e.target.value)
            }}
          />
          {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
          <button type='submit' className='register-btn'>
            Registrar
          </button>
          <button type='button' className='login-btn'>
            <Link to='/login'>Ir a Log in</Link>
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
