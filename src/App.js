import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Error404 from "./Components/Error404/Error404";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
// Link de React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/> 
          <Route path="*" element={<Error404/>} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
