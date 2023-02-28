import "/src/scss/Navbar.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";

const NavBar =() => {
    return (
        <div className="navbar row">
            <div className="logo">
            <Logo />
            </div>
            <nav className="nav_links">
            
            </nav>
            <ProductCart />
        </div>
    )
}

export default NavBar;