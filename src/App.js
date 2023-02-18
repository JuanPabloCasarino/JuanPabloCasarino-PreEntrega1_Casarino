import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

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
    <div>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <Routes>
          <Route path="*" element={<ItemListContainer/>}/>
            <Route path="/item" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
