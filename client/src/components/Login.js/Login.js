import { useState } from 'react';
import '../Login.js/login.css'
const Login = () => {

    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = (e) => {
        e.preventDefault();

    }


    return <>
        <h1 style={{ textAlign: 'center' }}>Welcome  Volunteering Beltran</h1>
        <div className='contenedorLogin'>

            <form onSubmit={handleClick} className='form'>
                <h2 className='title '>Log in</h2>

                <label className='label' htmlFor="username">Username</label>
                <input
                    className='input'
                    type="text"
                    name="username"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <label className='label' htmlFor="password">Password</label>
                <input
                    className='input'
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='submit' type="submit">Enter</button>
                <span>No acount ? <button onClick={handleClick} className='submitR'>Register</button></span>
            </form>
        </div>
    </>
}

export default Login;