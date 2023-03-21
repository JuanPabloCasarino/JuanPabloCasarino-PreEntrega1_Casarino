import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {products} from "../../data/products";
import ItemDetail from "../../Components/ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id}=useParams();
    const [detailObject,setDetailObject] = useState({});

    const getProducts = ()=>{
      const db = getFirestore();
      const querySnapshot = doc(db, 'products', id);

      getDoc(querySnapshot)
      .then((res)=>{
        setDetailObject({
          id: res.id, 
          ...res.data(),
        })
      })
      .catch((err) => console.log(err))
    }

useEffect(()=>{
  getProducts();
},[])
        
  return (
    <div>
      <ItemDetail detail={detailObject}/>
    </div>
  )
}

export default ItemDetailContainer
