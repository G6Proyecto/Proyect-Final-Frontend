import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts";
import NavBar from "./Components/Navbar/NavBar";
import Socials from "./Components/Navbar/Socials";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Pages/Admin";
import Error404 from "./Components/Pages/Error404";
import Contact from "./Components/Pages/Contact";
import AboutProduct from "./Components/Pages/product/about-product/aboutProduct"
import Home from "./Components/Pages/Home";
import UserContext from "./Context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import ListUsers from "./Components/Sections/ListUsers";



function App() {

  const [currentUser, setCurrentUser] = useState(undefined);

  const SaveAuth=(auth)=>{
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };

  const GetAuth=()=>{
    return JSON.parse(sessionStorage.getItem("auth"));
  };

  const RemoveAuth=()=>{
    sessionStorage.removeItem("auth");
  }

  useEffect(()=>{
    const session=GetAuth();
    if (session) {
      setCurrentUser(session)
    };
    return ()=>{
      setCurrentUser(undefined);
    };
  },[]);

  //se va a encargar de manejar pura y exclusivamente la instancia de axios escuchando constantemente currentUser
  useEffect(()=>{

    if (currentUser!==undefined) {
      //configuramos axios
      axios.defaults.headers.common["Authorization"]=`Bearer ${currentUser.token}`;
    }else{
      //quitamos la configuración del header de axios
      delete axios.defaults.headers.common["Authorization"];
    }

  },[currentUser]);

  return (
    <>
       <UserContext.Provider value={{ currentUser, setCurrentUser, SaveAuth, GetAuth, RemoveAuth }}>
      <BrowserRouter>
        <header className="sticky-top">
          <Socials />
          <NavBar />
        </header>
        <main className=''>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/error" element={<Error404/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/listUsers" element={<ListUsers/>} />
            <Route path="/CreateProducts" element={<CreateProducts/>}></Route>
            <Route path="/productDetail/:id" element={<AboutProduct />} />
            <Route path="/*" element={<Error404 />} />
              {currentUser !== undefined &&
                currentUser.role === "Administrador" && (
                  <Route path="/admin" element={<Admin />} />
                )}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
