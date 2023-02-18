import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const CartWidget = () => {
  return (
    <Container fluid>
            <Row className='carrito'>
                <Col><img src="./img/carrito.png" width="42px" alt='foto'></img></Col>
                <Col><h2>2</h2></Col>
            </Row>
        </Container>
    // <div className="carrito">
    //   <img src="./img/carrito.png" width="42px"></img>
    //   <h2>2</h2>
    // </div>
  )
}

export default CartWidget
