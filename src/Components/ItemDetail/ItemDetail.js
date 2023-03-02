import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

// Importacion de estilos
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemDetail = ({detail}) => {
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(1);
  return (
<Container fluid className='detalles'>
    <Row >
         <Col>
             <img src={detail.img} alt={detail.name} width={'600px'}/>
         </Col>
    </Row>
    <Row >
        <Col>
            <h2>{detail.name}</h2>
        </Col>   
    </Row>
    <Row >
        <Col>
            <h4>{detail.price}</h4>
        </Col>    
    </Row>
    <Row >
        <Col>
            <h4>Stock: {detail.stock}</h4>
        </Col>       
    </Row>
    <Row>
        <Col>
            <ItemCount count={count} setCount={setCount}/>
        </Col>       
    </Row>
    <Row>
        <Col>
            <button onClick={()=>addItem(detail, count)}>Agregar al carrito</button>
        </Col>       
    </Row>
    <Row>
        <Col>
            <button onClick={()=>navigate('/')}>Seguir comprando</button>
        </Col>       
    </Row>
    <Row>
        <Col>
            <button onClick={()=>navigate('/cart')}>Completar mi compra</button>
        </Col>       
    </Row>
</Container>


   
  )
}

export default ItemDetail
