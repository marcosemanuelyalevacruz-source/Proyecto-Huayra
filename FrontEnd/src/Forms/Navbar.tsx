import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img src="Huayra.png" alt="" style={{margin: "0px",width:"50px"}}/>
            </div>
            <div className="Link">
            <Link to="/">Home</Link>
            <Link to="/IniciarSesión">Iniciar Sesión</Link>
            <Link to="/Registrarse">Registrarse</Link>
            <Link to="/Galeria">Galeria</Link>
            </div>
        </nav>
    );
}
//<Link to="/VerInformación">Ver Información</Link>
//<Route path='/VerInformación' element={<Informacion/>}/>
export default Navbar;