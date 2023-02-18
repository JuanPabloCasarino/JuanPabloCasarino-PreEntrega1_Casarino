import {products} from "../../data/products";
import { useEffect, useState} from "react";
import ItemList from "../../Components/ItemList/ItemList";

import './style.css';
const ItemListContainer = ({}) => {

    const [productList, setProductList] = useState([]);

    const getProducts = new Promise((res, reject) => {
      setTimeout(() => {
        res(products)
      }, 2000);
    });
    
    useEffect(() => {
      getProducts
        .then((response)=>{
          setProductList(response)
        })
        .catch((error)=>{
          console.log(error)
        });
    }, []);

      return (
        <div className='productos'>
          <ItemList productList={productList}/>
        </div>
      )
  }

export default ItemListContainer
