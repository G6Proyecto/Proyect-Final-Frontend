<<<<<<< HEAD

=======
import CreateProducts from "./Components/Sections/AdminProducts/CreateProducts";
>>>>>>> d6ed308950d99930c34afe58818644124229cc5f
import NavBar from "./Components/Navbar/NavBar";
import Socials from "./Components/Navbar/Socials";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Pages/Admin";
import Error404 from "./Components/Pages/Error404";
import Contact from "./Components/Pages/Contact";
import AboutProduct from "./Components/Pages/product/about-product/aboutProduct"





function App() {
  return (
    <>
      <BrowserRouter>
        <header className="sticky-top">
          <Socials />
          <NavBar />
        </header>
        <main className=''>
          <Routes>
            <Route path="/" />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/error" element={<Error404/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/CreateProducts" element={<CreateProducts/>}></Route>
            <Route path="/productDetail/:id" element={<AboutProduct />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
