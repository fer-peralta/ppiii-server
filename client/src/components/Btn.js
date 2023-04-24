//import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import './Btn.css'
import UserCard from './UserCard'
import { config } from '../config/config'
const Btn = (props) => {

    const URL = `${config.REACT_APP_API_BASE_URL}users`

    //   const [datos, setDatos] = useState(null);
    const getUsers = async () => {
        const response = await fetch(URL);
        return response.json();
    }

    const { data, status } = useQuery('users', getUsers)

    if (status === 'loading') {
        return <p>Recuperando los users...</p>;
    }

    if (status === 'error') {
        return <p>Error</p>;
    }
    // async () => {
    //      const response = await fetch(url2)
    //         .then(response => response.json())
    //         .then(data => setDatos(data))
    //         .catch(error => console.log(error))



    // useEffect(async () => {
    //     const response = await fetch(url2)
    //         .then(response => response.json())
    //         .then(data => setDatos(data))
    //         .catch(error => console.log(error))
    // }, []);

    // if (!datos) {
    //     return <div>Cargando datos...</div>;
    // }

    // const handleClick = () => {

    //     if (datos) {

    //         alert(JSON.stringify(datos));
    //     } else {
    //         alert('Aún no se han cargado los datos');
    //     }

    // }

    return (
        <>
            {/* <button
                className='btn'
                onClick={handleClick} >{props.text}
            </button> */}
            <div className="products">
                {data.data.map(user => (
                    <UserCard user={user} key={user._id} />
                ))}
            </div>
            {/* 
            <ol>
                {lista.map(item => item)}
            </ol> */}
        </>
    )
}
export default Btn