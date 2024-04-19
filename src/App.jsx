import NavBar from "./Components/Navbar/NavBar";
import Socials from "./Components/Navbar/Socials";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Admin from "./Components/Pages/Admin";
import Error404 from "./Components/Pages/Error404";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="sticky-top">
          <Socials/>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/error" element={<Error404/>} />
            <Route path="/admin" element={<Admin/>} />
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
