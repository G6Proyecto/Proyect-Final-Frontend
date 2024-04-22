import axios from "axios";
import "../about-product/aboutProduct.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const aboutProduct = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {id} = useParams();

  const API = import.meta.env.VITE_API;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const getProduct = async()=>{
    try {
        const {data}= await axios.get(`${API}/products/${id}`);
        setProduct(data);
    } catch (error) {
        console.log("Error--->", error);
    }
}
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
  console.log("Valor del id seleccionado --->", id);
  getProduct()
},[])
/*
// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate()
  */

  return (
    <div className="app">
    {
        <div className="details" key={product._id}>
          <div className="big-img">
            <img src={product.img} alt=""/>
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.title}</h2>
              <span>${product.price}</span>
            </div>

            <p>{product.description}</p>
        
           
            <button className="cart">Add to cart</button>

          </div>
        </div>
      
    }
  </div>
    );
};

export default aboutProduct;