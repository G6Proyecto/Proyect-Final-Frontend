
import "../Navbar/NavBar.css"
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

const Home = () => {
    const {currentUser}=useContext(UserContext);

    console.log("CURRENT USER-->", currentUser);
    return (
        <div className="">
            
        </div>
    );
};

export default Home;