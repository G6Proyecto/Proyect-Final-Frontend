
import "../Navbar/NavBar.css"
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const API = import.meta.env.VITE_API;

  const getProducts = async ()=>{
    try {
        const response =await axios.get(`${API}/products`)
        setProducts(response.data);
    } catch (error) {
      console.log("Error en get axios---->", error);
    }
  };

  useEffect(()=>{
    getProducts();
    return()=>{
      setProducts([])
    }
  },[])

  const handleCategorySelect = (categoria) => {
    setSelectedCategory(categoria);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

    console.log("CURRENT USER-->", currentUser);
    return (
        <div className="">
            
        </div>
    );
};

export default Home;