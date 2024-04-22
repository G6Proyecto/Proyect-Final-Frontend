import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Pages/Admin";
import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts";


function App() {
  return (
    <>
       <BrowserRouter>
        <header>
          
        </header>
        <main>
         
          <Routes>
          
            <Route path="/Admin" element={<Admin></Admin>}></Route>
            <Route path="/CreateProducts" element={<CreateProducts></CreateProducts>}></Route>
            
          </Routes>
         
      
        </main>
        <footer></footer>
        </BrowserRouter>
    </>
  );
}

export default App;
