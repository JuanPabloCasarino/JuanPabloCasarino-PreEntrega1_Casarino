import ItemDetail from '../ItemDetail/ItemDetail';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const ItemCount = ({count, setCount}) => {
    const onAdd = () =>{
        setCount(count + 1);
    };
    const onRemove = () =>{
     if (count ===0){
        return;
     }
     setCount(count - 1);
    };

  return (
    <Container fluid>
    <Row className='agrego'>
        <Col className='mas-menos'>
            <button onClick={onRemove}>-</button> 
        </Col>  
        <Col>
            <span>{count}</span>
        </Col>
        <Col className='mas-menos'>
            <button onClick={onAdd}>+</button>     
        </Col>  
    </Row>
</Container>
  )
}

export default ItemCount
