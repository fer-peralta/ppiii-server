import './Form.css'
import React, { useState } from 'react'
import { config } from '../config/config';

const DeleteForm = () => {

    const [id, setId] = useState('');
    const URL = `${config.REACT_APP_API_BASE_URL}users/`

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Construir el objeto de datos para la actualización del post
            const options = {
                method: 'DELETE', // O 'PATCH' si corresponde
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
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DeleteForm