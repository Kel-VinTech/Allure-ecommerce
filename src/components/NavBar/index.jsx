import "/src/scss/Navbar.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";
import { Link } from "react-router-dom";
import { MdSearch,MdMenu, MdPerson } from "react-icons/md";

const NavBar =() => {
    return (
        <div className="navbar row">
            <Logo />
            <nav className="nav_links">
                <ul>
                    <li><Link className="active-link" to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    
                        <div className="oval">
                        <li><Link className="sales" to="/">SALES</Link></li>
                        </div>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
            </nav>
            <MdMenu className="hambuger"/>
            <div className="secondary_link">
                <MdPerson/>
                <MdSearch />
                <ProductCart />
            </div>
        </div>
    )
}

export default NavBar;