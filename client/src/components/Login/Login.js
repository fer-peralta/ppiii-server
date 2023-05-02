import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleClick = async (e) => {
    //     e.preventDefault();
    // }

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
                .catch(error => console.log(error))

            // Verificar la respuesta del servidor
            if (response.ok) {
                // Si la respuesta es exitosa, puedes realizar acciones adicionales aquí,
                // como mostrar un mensaje de éxito o redirigir a otra página
                console.log(response)
                console.log('Post actualizado exitosamente');

            }
        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error(error);
        }
    };


    return <>
        <h1 style={{ textAlign: 'center' }}>Bienvenido voluntarios Beltran</h1>
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
                    <div className='botones'>
                        <Link to='/profile' className='submit'>Ingresar</Link>
                        <Link to='/register' className='submitR'>Register</Link>
                    </div>
                </form>

            </div>

        </div>
    </>
}

export default Login;