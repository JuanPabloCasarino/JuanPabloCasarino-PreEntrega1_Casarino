import {CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
  

    const addItem =(item, quantity)=>{

      // Confirmacion si esta en el carrito
      if(isInCart(item.id)){
        const newCart = cart.map((product)=>{
          if(product.id === item.id){
            product.quantity = product.quantity + quantity;
            return product;
          } else{
            return product;
          }
        })
        setCart(newCart);
      } else{
        const product = {
          id: item.id,
          category: item.category,
          name: item.name,
          price: item.price,
          stock: item.stock,
          img:item.img,
          quantity: quantity
        }
        setCart([...cart, product]);
      }   
    }

    const clear = ()=>{
        setCart([]);
    }
    const removeItem = (productId)=>{
      setCart(cart.filter((product) => product.id !== productId))
    };

    // Validacion de producto
    const isInCart = (productId)=>{
      if(cart.find((product)=>product.id === productId)){
        return true;
      } else{
        return false;
      }
    };
  return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem}}>{children}</CartContext.Provider>
  )
}

export default CartProvider
