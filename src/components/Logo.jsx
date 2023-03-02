import "/src/scss/Logo.scss";
import { Link ,useLocation} from "react-router-dom";

const Logo = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <header className="logo">
            <h1
            style={{color: isHome ? '#E9E9E9': '#292929'}}
            >ALLURE.</h1>
        </header>
    )
}

export default Logo;