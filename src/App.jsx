import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts";


function App() {
  return (
    <>
      
        <header></header>
        <main>
      <CreateProducts></CreateProducts>
        </main>
        <footer></footer>
    
    </>
  );
}

export default App;
