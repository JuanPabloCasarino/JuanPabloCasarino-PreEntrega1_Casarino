import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
// importaciones de CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const CartWidget = () => {
  const {cart} = useContext(CartContext)
  const [total, setTotal] =useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
  },[cart])

  return (
    <Link to={'/cart'}>
      <Container fluid>
            <Row className='carrito'>
              <Col>
                <img src="/img/carrito.png" width="42px" alt='foto'/>
                {total} 
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
