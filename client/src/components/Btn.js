import './Btn.css'
const Btn = (props) => {
    return (
        <> 
            <button className='btn' style={{ alignItems: 'center' }}>{props.text}</button>
        </>
        )
    }
    export default Btn