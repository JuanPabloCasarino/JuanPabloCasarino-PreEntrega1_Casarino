import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';
import {collection, adDoc, getFirestore, addDoc, doc, updateDoc} from 'firebase/firestore';

// importaciones CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const Cart = ()=>{
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const db = getFirestore();
  
  //Funcionalidad para crear ordenes al comprar
  const createOrder = (event)=>{
    event.preventDefault();
    const querySnapshot = collection(db, 'orders');
    addDoc(querySnapshot,{
      buyer: {
        email: 'test@example.com',
        name: 'test',
        phone: '121313563',
      },
      products: cart.map((product)=>{
        return{
          title: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity
        }
      }),
      total: cart.reduce((acc,curr)=> acc + curr.price * curr.quantity, 0)
    })
    .then((res)=>{
      alert('Orden con el id: '+res.id+ ' creada' )
      updateStock();
    })
    .catch((error)=>console.log(error))
  }

  const updateStock = () =>{
    cart.forEach((prod) => {
      const querySnapshot = doc(db, 'products', prod.id)

      updateDoc(querySnapshot, {
        stock: prod.stock - prod.quantity,
      })
      .then(()=>{
        alert('El stock ha sido actualizado')
      })
      .catch((error)=> console.error(error))
    })
  }

  return (
    <div>
      {cart.map((product)=>(
            <Col className="carro">
                <h4 className="titulo">{product.name}</h4>
                <h3>{product.quantity} - ${product.price*product.quantity}</h3>
                <button className="quitar" onClick={()=>removeItem(product.id)}>Quitar</button>  
            </Col> 
      ))}
      {cart.length > 0 && 
      <div className="botonvac">
        <button onClick={createOrder} className="completo">Confirmar</button>
        <button className="vacio" onClick={clear}>Vaciar carrito</button>
      </div>}
      {cart.length == 0 && <div  className="botonvac">
          <h2>No hay productos en el carrito</h2>
          <button onClick={()=>navigate('/')}>Seguir comprando</button>
        </div>}
    </div>
  )  
};



export default Cart
