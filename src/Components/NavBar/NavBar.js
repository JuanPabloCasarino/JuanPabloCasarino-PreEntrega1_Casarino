import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


// Links para estilos
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {


  return (
        <Container fluid >
            <Row className='navbar'>
                <Col>
                  <NavLink to="/">
                    Inicio
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/salado">
                    Lo Salado
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/dulceUno">
                    Lo Dulce
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/dulceDos">
                    Más Dulce
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/sinGluten">
                    Sin Gluten
                  </NavLink>
                </Col>
                
                <Col><CartWidget/></Col>
            </Row>
        </Container>
  )
}

export default NavBar;