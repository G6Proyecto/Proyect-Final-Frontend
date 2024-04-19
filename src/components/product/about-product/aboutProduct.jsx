import BurgerSimple from "../../../assets/burgersimple.webp"
import "../about-product/aboutProduct.css"


const aboutProduct = () => {
    return (
        <article className="product-detail">
        <img src={BurgerSimple} alt="" className="product-detail__img" />
        <div className="product-detail__info">
          <h2 className="name">{"Hamburgesa Simple"}</h2>
          <p className="description">{"Hamburgesa Simple"}</p>
          <ul className="info-grid">
            <li>Price:</li>
            <li>${"precio"}</li>
            <li>Type:</li>
            <li>{"Hamburgesa"}</li>
          </ul>
        </div>
      </article>
    );
};

export default aboutProduct;