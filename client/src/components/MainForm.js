import './MainForm.css'
import Btn from './Btn'
const MainForm = () => {
    return (
        <> <h1 style={{ textAlign: 'center' }}>Welcome  Volunteering Beltran</h1>
            <div className='contenedor'>
            

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
            <Btn/>

                    </form>
                </div>
            </div>
        </>
    )
}
export default MainForm