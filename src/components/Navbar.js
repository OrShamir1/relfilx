import { Link } from "react-router-dom";
function Navbar() {

    return (
        <ul className="navbar">
            <li className="nav">
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            </li>
            <li className="nav">
                <Link to="/catalog" style={{color: "white", textDecoration: "none"}}>Catalog</Link>
            </li>
        </ul>
    )
    
}   
export default Navbar;