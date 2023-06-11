// import './Footer.css'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='social'>
          <Link
            className='whatsapp'
            to='https://facebook.com'
            target='_blank'
          ></Link>
          <Link
            className='linkedin'
            to='https://linkedin.com'
            target='_blank'
          ></Link>
          <Link
            className='github'
            to='https://github.com/fer-peralta/ppiii-server'
            target='_blank'
          ></Link>
        </div>
        <p className='footer_copyright'>
          Copyright &copy; Todos los derechos reservados
        </p>
      </footer>
    </>
  )
}

export default Footer
