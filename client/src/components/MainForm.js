import './MainForm.css'
import Btn from './Btn'
import Button from './button'
import Form from './Form'
const MainForm = () => {
    const datos = false;
    function handleClick() {

        if (datos) {

            alert(JSON.stringify(datos))
        } else {
            alert('Aún no se han cargado los datos')
        }

    }

    return (
        <> <h1 style={{ textAlign: 'center' }}>Welcome  Volunteering Beltran</h1>
            <div className='contenedor'>



                <Button
                    text="Show users" />
                <Button
                    text="Create user"
                    onClick={handleClick}
                />

                <Form></Form>
                <Button
                    text="Delete user" />
                <Button
                    text="Update user" />


                <Btn />

                {/* <Btn
                    text="create User"
                />
                <Form />

                <Btn
                    text="Show Users"

                />
                <Btn
                    text="Update Users"
                />
                <Btn
                    text="Detele Users"
                /> */}


                {/*             
            <h2 style={{ textAlign: 'center' }}>Put your mail.</h2>


                <div className='contenedorForm'>
                    <form className="Form">
                        <div className="input">
                            <input
                                type="mail"
                                placeholder="Mail institucional"
                                name="mail" />
                        </div>

                
                
            <button className='btn' >Tutor</button>
            <button className='btn' >Estudiante Help me !</button> 
    
                    </form>
                </div> */}
            </div>
        </>
    )
}
export default MainForm