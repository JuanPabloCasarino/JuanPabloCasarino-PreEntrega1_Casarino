import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './styles.css';

// Estilos de bootstrap
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
const ItemList = ({productList}) => {
  return (
    <div className="itemList" >
      {
      productList.map((product)=>(
        <div key={product.id}>
          <Link to={'/item/'+ product.id}>
           <Item product={product}/>
          </Link>
        </div> 
      ))}
    </div>
  );
};

export default ItemList;
