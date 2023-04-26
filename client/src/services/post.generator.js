
export const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        console.log(avatar)
        const Post = { email, password }
        const URL = `${config.REACT_APP_API_BASE_URL}users`

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