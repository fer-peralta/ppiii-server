//import { useState, useEffect } from 'react'
import './Form.css'
const Form = (props) => {



    return (
        <>

            <div className='contenedorForm'>

                <form>
                    <h2>Formulario</h2>
                    <div >
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name="name" />
                        <label htmlFor="Apellido">Apellido</label>
                        <input type="text" name="Apellido" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                        <label htmlFor="edad">Edad</label>
                        <input type="text" name="edad" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form