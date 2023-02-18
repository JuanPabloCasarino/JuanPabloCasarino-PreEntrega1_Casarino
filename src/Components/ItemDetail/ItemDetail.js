// Importacion de estilos
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ItemDetail = ({detail}) => {
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
</Container>


   
  )
}

export default ItemDetail
