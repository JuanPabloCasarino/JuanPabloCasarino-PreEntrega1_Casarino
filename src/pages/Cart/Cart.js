import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';
import {collection, adDoc, getFirestore, addDoc, doc, updateDoc} from 'firebase/firestore';

// importaciones CSS
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.css';

const Cart = ()=>{
  const { cart, clear, removeItem } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name:"",
    phone:"",
    email:'',
  })
  const navigate = useNavigate();
  const db = getFirestore();
  
  //Funcionalidad para crear ordenes al comprar
  const createOrder = (event)=>{
    event.preventDefault();
    const querySnapshot = collection(db, 'orders');
    addDoc(querySnapshot,{
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
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


  const handleInput = (event) =>{
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div>
      {cart.map((product)=>(
            <Col key={product.id} className="carro">
                <h4 className="titulo">{product.name}</h4>
                <h3>{product.quantity} - ${product.price*product.quantity}</h3>
                <button className="quitar" onClick={()=>removeItem(product.id)}>Quitar</button>  
            </Col> 
      ))}
      {cart.length > 0 && 
      <div className="botonvac">
        <button className="vacio" onClick={clear}>Vaciar carrito</button>
      </div>}
      {cart.length == 0 && <div className="botonvac">
          <h2>No hay productos en el carrito</h2>
          <button onClick={()=>navigate('/')}>Seguir comprando</button>
        </div>}

        {cart.length > 0 &&
        <Form className="form">
          <Form.Group className="mb-3 formulario">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu Nombre" 
              value={formValue.name} onChange={handleInput} name="name"/>
            </Form.Group>
            <Form.Group className="mb-3 formulario">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu Telefono" 
              value={formValue.phone} onChange={handleInput} name="phone"/>
            </Form.Group>
            <Form.Group className="mb-3 formulario">
              <Form.Label>Direccion de E-Mail</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu E-Mail" 
              value={formValue.email} onChange={handleInput} name="email"/>
            </Form.Group>
            <button onClick={createOrder} className="confirmar" type="submit">
              Confirmar compra
            </button>
        </Form>
        }
    </div>
  )  
};



export default Cart
