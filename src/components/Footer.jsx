import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-body-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 text-dark">
                        <h6>Buscar Tienda</h6>    
                    </div>
                    <div className="col-md-2 text-dark">
                        <h6>Ayuda</h6>    
                    </div>
                    <div className="col-md-2 text-dark">
                        <h6>Acerca de CoreBuilds</h6>    
                    </div>
                    <div className="col-md-4 text-end">
                        <Link to={"https://twitter.com/Nike"} className="me-1"><img src={twitter} alt={"Twitter"} width={32} /></Link>
                        <Link to={"https://www.facebook.com/nike"} className="me-1"><img src={facebook} alt={"Facebook"} width={32} /></Link>
                        <Link to={"https://www.instagram.com/nike/"} className="me-1"><img src={instagram} alt={"Instagram"} width={32} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;