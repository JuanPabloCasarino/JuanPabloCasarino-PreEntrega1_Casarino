import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
// importaciones de CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <Link to={'/cart'}>
      <Container fluid>
            <Row className='carrito'>
              <Col>
                <img src="/img/carrito.png" width="42px" alt='foto'/>
                {cart?.length} 
              </Col>
            </Row>
      </Container>
    </Link>
    
    // <div className="carrito">
    //   <img src="./img/carrito.png" width="42px"></img>
    //   <h2>2</h2>
    // </div>
  )
}

export default CartWidget
