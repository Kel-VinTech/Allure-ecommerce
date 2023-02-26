import "/src/scss/Navbar.scss";
import Logo from "../Logo";

const NavBar =() => {
    return (
        <div className="navbar row">
            <Logo />
            <h2>Cart<span>(2)</span></h2>
            <nav className="nav_links">
            
            </nav>
        </div>
    )
}

export default NavBar;