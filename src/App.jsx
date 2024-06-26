import NavBar from "./Components/Navbar/NavBar";
import Socials from "./Components/Navbar/Socials";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Pages/Admin";
import Error404 from "./Components/Pages/Error404";
import Contact from "./Components/Pages/Contact";
import AboutProduct from "./Components/Pages/product/about-product/aboutProduct"
import GaleryProduct from "./Components/Pages/product/GaleryProduct"
import FeatureProducts from "./Components/Pages/product/FeaturesProduct"
import Home from "./Components/Pages/Home";
import UserContext from "./Context/UserContext";
import { useEffect, useState } from "react";
import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts"
import UsersList from "./Components/Sections/AdminUsers/UsersList"
import axios from "axios";




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
    }
    return ()=>{
      setCurrentUser(undefined);
    };
  },[]);

   useEffect(()=>{

     if (currentUser!==undefined) {
       axios.defaults.headers.common["Authorization"]=`Bearer ${currentUser.token}`;
     }else{
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
            <Route path="/galery" element={<GaleryProduct/>}/>
            <Route path="/productDetail/:id" element={<AboutProduct />}/>
            <Route path="/*" element={<Error404 />} />
            <Route path="/GaleryProduct" element={<GaleryProduct/>}/>
            <Route path="/featureProduct" element={<FeatureProducts/>}/>
                {currentUser !== undefined &&
                  currentUser.role === "Administrador" && (
                  <><Route path="/Admin" element={<Admin />}/>
                  <Route path="/CreateProducts" element={<CreateProducts/>}/>
                  <Route path="/ListUsers" element={<UsersList/>} />
                  </>
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
