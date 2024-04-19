import ListProduct from '../product/listProduct'
import "../product/listProduct.css"
const Home = () => {
    return (
    <>

        <section className='sectionProducts w-75 m-3'> 
            <ListProduct className="contentProduct"></ListProduct>
        </section>
        

        
        </>
    );
};

export default Home;