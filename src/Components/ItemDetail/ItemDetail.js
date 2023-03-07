import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

// Importacion de estilos
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
            <h4>${detail.price}</h4>
        </Col>    
    </Row>
    <Row >
        <Col>
            <h4>Stock: {detail.stock}</h4>
        </Col>       
    </Row>
    <Row >
        <Col>
            {detail.id === '007' && 
            <>
                <select className='opciones' aria-label="Default select example">
                    <option className='opciones' value="1">Pascualina</option>
                    <option className='opciones'value="2">Jamon y Queso</option>
                    <option className='opciones' value="3">Capresse</option>
                    <option className='opciones' value="3">Berenjena</option>
            </select>
          </>
            }
        </Col>       
    </Row>
    <Row>
        <Col>
            <ItemCount count={count} setCount={setCount}/>
        </Col>       
    </Row>
    <Row>
        <Col className='bot-agregar'>
            <button disabled={count >detail.stock ? true : false } onClick={()=>addItem(detail, count)}>Agregar al carrito</button>
        </Col>       
    </Row>
    <Row>
        <Col className='bot-agregar'>
            <button onClick={()=>navigate('/')}>Seguir comprando</button>
        </Col>       
    </Row>
    <Row>
        <Col className='bot-agregar'>
            <button onClick={()=>navigate('/cart')}>Completar mi compra</button>
        </Col>       
    </Row>
</Container>


   
  )
}

export default ItemDetail
