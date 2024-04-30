import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${API}/products`);
        setProducts(response.data);
      } catch (error) {
        console.log("Error en get axios---->", error);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm && (
        <div>
          {filteredProducts.map((product) => (
            <div key={product._id}>
              <NavLink to={`/productDetail/${product._id}`}>
                <h4>{product.title}</h4>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;