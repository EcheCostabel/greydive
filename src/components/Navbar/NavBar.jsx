import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './NavBar.css'

function BasicExample() {
  return (
    <Navbar className='navv' expand="lg">
      <div>
        <a href='https://www.greydive.com/'  target="_blank" className='navbarr'>
          <img width={170} src='https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png' alt="Simulacr" />
        </a>
      </div>

    </Navbar>
  );
}

export default BasicExample;