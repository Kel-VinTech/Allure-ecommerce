import "/src/scss/Navbar.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";
import { Link } from "react-router-dom";

const NavBar =() => {
    return (
        <div className="navbar row">
            <Logo />
            <nav className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link className="sales" to="/">
                        SALES</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
            </nav>
            <div className="secondary_link">
                <ProductCart />
            </div>
        </div>
    )
}

export default NavBar;