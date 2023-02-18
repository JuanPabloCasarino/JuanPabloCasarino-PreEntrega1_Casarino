import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
// Links para estilos
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
  return (
    <div>
        <Container fluid>
            <Row className='navbar'>
                <Col>
                  <NavLink to="/">
                    Inicio
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/salado">
                    Lo salado
                  </NavLink>
                </Col>
                <Col>
                  <Link to="/category/dulce">
                    Lo Dulce
                  </Link>
                </Col>
                <Col>
                  <NavLink to="/category/masdulce">
                    Más Dulce
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/category/singluten">
                    Sin gluten
                  </NavLink>
                </Col>
                
                <Col><CartWidget/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar;