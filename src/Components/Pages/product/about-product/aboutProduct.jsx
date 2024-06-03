import axios from "axios";
import "../productStyle.css"
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import UserContext from "../../../../Context/UserContext";

const aboutProduct = () => {
  const { GetAuth } = useContext(UserContext);
  const navigate = useNavigate();


  
  const [product, setProduct] = useState([]);

  const {id} = useParams();

  const API = import.meta.env.VITE_API;


  const getProduct = async()=>{
    try {
        const {data}= await axios.get(`${API}/products/${id}`);
        setProduct(data);
    } catch (error) {
        console.log("Error--->", error);
    }
}

useEffect(()=>{

  getProduct()
},[id])
const handleAddToCart = () => {
  const session = GetAuth();
  if (!session) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Para poder realizar una compra se necesita iniciar sesion',
    });
  } else {
    navigate('/error');
  }
};


  return (
    <div className="app">
    {
        <div className="details" key={product._id}>
          <div className="big-img">
            <img src={product.url} alt=""/>
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.title}</h2>
              <span>${product.price}</span>
            </div>

            <p>{product.description}</p>
        
           
            <button className="cart" onClick={handleAddToCart}>Agregar al carrito</button>

          </div>
        </div>
      
    }
  </div>
    );
};

export default aboutProduct;