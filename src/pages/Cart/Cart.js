import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const Cart = ()=>{
  const { cart, clear } = useContext(CartContext);
  return (
    <div>
      {cart.map((product)=>(
          <div key={product.name}>
            <h2>{product.name}</h2>
            <button>X</button>
          </div>
      ))}
      {
        cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>
      }
    </div>
  )
};



export default Cart
