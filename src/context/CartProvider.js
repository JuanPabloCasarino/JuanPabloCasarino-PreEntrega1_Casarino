import {CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem =(item, quantity)=>{
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

    const clear = ()=>{
        setCart([]);
    }
  return (
    <CartContext.Provider value={{cart, addItem, clear}}>{children}</CartContext.Provider>
  )
}

export default CartProvider
