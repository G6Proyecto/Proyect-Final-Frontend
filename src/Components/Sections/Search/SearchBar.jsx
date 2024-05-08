import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const API = import.meta.env.VITE_API;
  const searchBarRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setSearchTerm('');
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='pt-4 position-relative' ref={searchBarRef}>
      <div className='input-group mb-4'>
        <span className="input-group-text"><i className="bi bi-search cust-icon"></i></span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setShowResults(true);
          }}
        />
      </div>
      {showResults && searchTerm && (
        <div className='search-results'>
          {filteredProducts.map((product) => (
            <div key={product._id} className='search-result-item'>
              <NavLink to={`/productDetail/${product._id}`} className="">
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