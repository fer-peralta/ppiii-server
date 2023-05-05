import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
//import Profile from '../UserProfile/USerProfile';
const Login = () => {
    const [data, setdata] = useState({});
    const [miLogin, setMiLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const Post = { email, password }
            const URL = "http://localhost:8080/api/users/login"

            const options = {
                method: 'POST', // O 'PATCH' si corresponde
                body: JSON.stringify(Post),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // Hacer la solicitud PUT o PATCH a la API

            const response = await fetch(URL, options)
                .then(resp => resp.json())
            console.log(data)
            setdata(response)
            if (response.message === "User log in with success") {
                console.log("logeado con exito")
                setMiLogin(true)
            } else {
                alert("Email o usuario incorrecto")
            }

        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error(error);
        }
    };


    return <>
        <h1 style={{ textAlign: 'center' }}>Bienvenido voluntarios Beltran</h1>
        <Link style={{ textAlign: 'center' }} to='/profile' className='submit'>Perfil</Link>
        <div className='contenedorLogin'>
            <div className='form'>
                <form onSubmit={handleSubmit} >
                    <h2 className='title '>Log in</h2>

                    <label className='label' htmlFor="username">Email</label>
                    <input
                        className='input'
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className='label' htmlFor="password">Password</label>
                    <input
                        className='input'
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit' className='submit'>Ingresar</button>
                    <div className='botones'>

                    </div>
                </form>
                {miLogin === true && <p>Bienvenido {data.user.name} {data.user.surname}</p>}
                <Link to='/register' className='submitR'>registrarme</Link>
            </div>

        </div>
    </>
}

export default Login;