import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../img/simulacr.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

function BasicExample() {
  return (
    <Navbar className='navv' expand="lg">
      <Container>
      <Link to={`/`} className="navbar-brand">
            <img src={img} alt="Simulacr"  />
          </Link>
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;