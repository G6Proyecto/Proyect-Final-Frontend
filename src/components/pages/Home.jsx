import ListProduct from "../product/listProduct"
import FilterProduct from "../product/filterProduct";
import "../product/listProduct.css"
const Home = () => {
    return (
    <>

        <div className="d-flex">
            <ListProduct></ListProduct>
            <FilterProduct></FilterProduct>
        </div>

        
        </>
    );
};

export default Home;