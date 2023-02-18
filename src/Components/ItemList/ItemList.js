import Item from "../Item/Item";

// Estilos de bootstrap
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
const ItemList = ({productList}) => {
  return (
    <div>
    {
    productList.map((product)=>(
      <div key={product.id}>
         <Item product={product}/>
      </div>      
    ))}
    </div>
  );
};

export default ItemList;
