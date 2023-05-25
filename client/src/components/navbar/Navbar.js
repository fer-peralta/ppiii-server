import './Navbar.css'
import Logo from "../../utils/favourite-book.svg"
import { Link } from "react-router-dom"


const Navbar = () => {


    return (
        <nav className="navTop">
            <div className="div_logo">
                <Link to="/"><img src={Logo} alt="Logotipo" className="home_button" /></Link>
            </div>
            <div className="navList">
                <Link to="/mentories" className="nav_buttons">Inicio</Link>
                <Link to="/" className="nav_buttons">Login</Link>
                <Link to="/register" className="nav_buttons">Registro</Link>
                <Link to="/profile" className="nav_buttons">Perfil</Link>

            </div>
        </nav>
    )
}

export default Navbar