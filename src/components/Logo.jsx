import "/src/scss/Logo.scss";
import { Link ,useLocation} from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <header className="logo">
            <motion.h1
            style={{color: isHome ? '#E9E9E9': '#292929'}}
            initial={{x:-250}}
            animate={{x:0}}
            >ALLURE.</motion.h1>
        </header>
    )
}

export default Logo;