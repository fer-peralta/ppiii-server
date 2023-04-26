import { useState } from 'react';
import '../Register/register.css'
const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [adress, setAdress] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const handleClick = (e) => {

        e.preventDefault();


    }
    return <>

        <div className='contenedorLogin'>
            <form onSubmit={handleClick} className='form'>
                <h2 className='title '>Registro</h2>
                <label className='label' htmlFor="Nombre">Username</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="Name">Name</label>
                <input type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor="Surname">Surname</label>
                <input type="text"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)} />

                <label htmlFor="adress">Adress</label>
                <input type="text"
                    name="adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)} />

                <label htmlFor="age">age</label>
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button className='submit' type="submit">Send</button>
            </form>
        </div>
    </>
}

export default Register;