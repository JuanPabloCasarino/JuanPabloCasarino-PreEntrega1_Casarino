import CartWidget from '../CartWidget/CartWidget';
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
                <Col><a href="*">Lo Salado</a></Col>
                <Col><a href="*">Lo Dulce</a></Col>
                <Col><a href="*">Mas Dulce</a></Col>
                <Col><a href="*">Sin Gluten</a></Col>
                <Col><CartWidget/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar;