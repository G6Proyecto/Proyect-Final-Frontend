import { Container } from "react-bootstrap";
import "../Navbar/NavBar.css"

const Footer = () => {
    return (
        <>
        <Container fluid className="p-0 mb-0">
            <div className="text-dark text-center navcolor">
                <p>Todos los derechos reservados</p>
            </div>
        </Container>
        </>
    );
};

export default Footer;