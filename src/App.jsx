import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administracion from "./Components/Pages/Administracion";
import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts";


function App() {
  return (
    <>
      
        <header>
          
        </header>
        <main>

         <Administracion></Administracion>
        </main>
        <footer></footer>
    
    </>
  );
}

export default App;
