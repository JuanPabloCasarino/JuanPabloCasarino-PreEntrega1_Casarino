import { useEffect, useState} from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection, query, where, Query} from 'firebase/firestore';

// Importacion de estilos 
import './style.css';

const ItemListContainer = () => {

    const {categoryId} =useParams();
    const [productList, setProductList] = useState([]);

    const getProducts = ()=>{
      const db = getFirestore();
      const queryBase = collection(db,'products');
      const querySnapshot = categoryId 
        ? query(queryBase, where('category', '==', categoryId)) 
        : queryBase;
        // Filtro por categorias
        getDocs(querySnapshot)
        .then((response)=>{
          const list =response.docs.map((doc)=>{
            return {
              id: doc.id, 
              ...doc.data(),
            };
          });
          setProductList(list);
        })
        .catch((error)=> console.log(error));     
     };

    useEffect(() => {
      getProducts();
    }, [categoryId]);

      return (    
          <ItemList productList={productList}/>  
      )
  }

export default ItemListContainer
