//import { useState, useEffect } from 'react'
import './Form.css'
import React, { useState } from 'react';
import { config } from '../config/config';

const UpdateForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [id, setId] = useState('');

    const URL = `${config.REACT_APP_API_BASE_URL}users/`


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Construir el objeto de datos para la actualización del post
            const Post = { username, password, name, adress, age, phone, avatar }

            const options = {
                method: 'PUT', // O 'PATCH' si corresponde
                body: JSON.stringify(Post),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // Hacer la solicitud PUT o PATCH a la API
            const response = await fetch(`${URL}${id}`, options)
                .then(resp => resp.json())
                .catch(error => console.log(error))

            // Verificar la respuesta del servidor
            if (response.ok) {
                // Si la respuesta es exitosa, puedes realizar acciones adicionales aquí,
                // como mostrar un mensaje de éxito o redirigir a otra página
                console.log(response)
                console.log('Post actualizado exitosamente');
            } else {
                // Si la respuesta es un error, puedes manejarlo adecuadamente,
                // por ejemplo, mostrar un mensaje de error
                console.error('Error al actualizar el post');
            }
        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error(error);
        }
    };




    return (
        <>

            <div className='contenedorForm'>

                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <div >
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}

                        />
                        <label htmlFor="Nombre">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}

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
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            type="text"
                            name="avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateForm