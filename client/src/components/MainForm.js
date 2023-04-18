import './MainForm.css'
import Btn from './Btn'
import Button from './button'
import Form from './Form'
import UpdateForm from './UpdateForm'
import DeleteForm from './DeleteForm'
const MainForm = () => {


    return (
        <> <h1 style={{ textAlign: 'center' }}>Welcome  Volunteering Beltran</h1>
            <div className='contenedor'>

                <Button
                    text="Create user"
                />
                <Form></Form>
                <Button
                    text="Show users" />
                <Btn />
                <Button
                    text="Update user" />
                <UpdateForm />
                <Button
                    text="Delete user" />
                <DeleteForm />

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