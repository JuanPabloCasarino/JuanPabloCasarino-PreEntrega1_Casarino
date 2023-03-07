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
    <div>
      {cart.map((product)=>(
            <Col className="carro">
                <h4 className="titulo">{product.name}</h4>
                <h3>{product.quantity} - ${product.price*product.quantity}</h3>
                <button className="quitar" onClick={()=>removeItem(product.id)}>Quitar</button>  
            </Col> 
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
