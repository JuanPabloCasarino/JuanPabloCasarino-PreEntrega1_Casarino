import './style.css';
const Item = ({product}) => {
 
  return (
    <div className="item">
      <h2 className="titulos">{product.name}</h2>
      <h3 className='nombre'>{product.price}</h3>
      <img src={product.img} alt={product.name} width='450px' height={'550px'}/>
    </div>
  )
}

export default Item
