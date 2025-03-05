import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-column justify-content-center mt-4 pb-4">
                <h2 className="text-center mb-3 text-decoration-underline">Síguenos en Nuestras Redes Sociales!</h2>
                <div className="d-flex justify-content-evenly">
                <div>
                <FaInstagram size={40} />
                </div>
                <div>
                    <FaFacebook size={40}/>
                </div>
                <div>
                    <FaTwitter size={40}/>
                </div>
                <div>
                    <FaWhatsapp size={40}/>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;