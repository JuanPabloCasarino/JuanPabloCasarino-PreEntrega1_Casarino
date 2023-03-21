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
      const querySnapshot = collection(db,'products');

      if(categoryId){
        const filteredQuery = query(querySnapshot, where('category', '==', categoryId));
        // Filtro por categorias
        getDocs(filteredQuery)
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
      }else{
        // Catalogo entero
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
      }
      // Catalogo entero 
      
     };

    useEffect(() => {
      getProducts();
    }, [categoryId]);

      return (    
          <ItemList productList={productList}/>  
      )
  }

export default ItemListContainer
