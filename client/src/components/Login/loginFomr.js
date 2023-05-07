import { useForm } from "react-hook-form";
import './login.css'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
//import { edadValidator } from "./validators";

const Formulario = () => {
    const [miLogin, setMiLogin] = useState(false);




    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = async (data) => {
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

            setdata(response)
            if (response.message === "User log in with success") {
                console.log("logeado con exito")

                console.log(data)
                setMiLogin(true)

            } else {
                console.log("Email o usuario incorrecto")
            }

        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error(error);
        }
    }





    return <div>
        <h1 style={{ textAlign: 'center' }}>Bienvenido voluntarios Beltran</h1>
        <div className='contenedorLogin'>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='title '>Log in</h2>
                    <div>
                        <label className='label' htmlFor="password">Password</label>
                        <input autoComplete='off' className='input' type="email" {...register('email', {
                            required: true,
                            pattern: /.+@itbeltran.com.ar/

                        })} />
                        {errors.email?.type === 'required' && <p className="errorMessage">El campo nombre es requerido</p>}
                        {errors.email?.type === 'pattern' && <p className="errorMessage">El formato del email es incorrecto</p>}

                    </div>

                    <label className='label' htmlFor="password">Contraseña</label>
                    <input className='input' type="password" {...register('password', {
                        required: true,
                        minLength: 4

                    })} />
                    {errors.password?.type === 'required' && <p className="errorMessage">El campo nombre es requerido</p>}
                    {errors.password?.type === 'minLength' && <p className="errorMessage">El campo debe contener mas de 4 caracteres</p>}
                    <button type="submit" value="Enviar"> Enviar</button>
                    {miLogin === true && <Navigate to="/profile" replace={true} />}
                </form>
            </div>
        </div>
    </div>
}

export default Formulario;