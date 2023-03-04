import {products} from "../../data/products";
import { useEffect, useState} from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collections} from 'firebase/firestore';

// Importacion de estilos 
import './style.css';

const ItemListContainer = ({}) => {

    const {categoryId} =useParams();
    
    const [productList, setProductList] = useState([]);
    const getProducts = new Promise((res, reject) => {
      if(categoryId){
          const filteredProducts = products.filter(
            (item) => item.category == categoryId
          );
          setTimeout(() => {
            res(filteredProducts)
          }, 2000);
        } else {
          setTimeout(() => {
            res(products)
          }, 2000);
      }
      
    });
    
    useEffect(() => {
      getProducts
        .then((response)=>{
          setProductList(response)
        })
        .catch((error)=>{
          console.log(error)
        });
    }, [categoryId]);

      return (    
          <ItemList productList={productList}/>  
      )
  }

export default ItemListContainer
