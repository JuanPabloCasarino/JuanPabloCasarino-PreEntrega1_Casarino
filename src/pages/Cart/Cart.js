import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';

// importaciones CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

const Cart = ()=>{
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    // cart.map((product)=>(
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <Card className="carro" >
    //         <Card.Img src={product.img} alt={product.name}/>
    //         <Card.Body>
    //           <Card.Title>{product.name}</Card.Title>
    //           <Card.Text>{product.quantity}</Card.Text>
    //           <Button onClick={()=>removeItem(product.id)}>Quitar</Button>
    //         </Card.Body>
    //        </Card>
    //     </Col>
    //   </Row>
    // </Container>

    <div>
      {cart.map((product)=>(
        <Container fluid>  
          <Row>
          <Col >
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.quantity}</Card.Text>
                <Button onClick={()=>removeItem(product.id)}>Quitar</Button>  
          </Col>
        </Row>
        </Container>
        
      ))}
      {cart.length > 0 && <div className="botonvac"><button onClick={clear}>Vaciar carrito</button></div>}
      {cart.length == 0 && <div  className="botonvac">
          <h2>No hay productos en el carrito</h2>
          <button onClick={()=>navigate('/')}>Seguir comprando</button>
        </div>}
    </div>
  )  
};



export default Cart
