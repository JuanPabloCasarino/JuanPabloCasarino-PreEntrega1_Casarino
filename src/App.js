import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
// Link de React Bootstrap
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Esto es una tienda"/>
    </div>
  );
}

export default App;
