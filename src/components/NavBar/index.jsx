import "/src/scss/Navbar.scss";
import Logo from "../Logo";

const NavBar =() => {
    return (
        <div className="navbar row">
            <Logo />
            <nav className="nav_links">
            
            </nav>
            <h2>Cart<span>(2)</span></h2>
        </div>
    )
}

export default NavBar;