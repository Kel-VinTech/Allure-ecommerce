import { Link } from "react-router-dom"
import "/src/scss/Cart.scss";

const ProductCart = () => {
    return (
       <>
        <Link className="cart" to="#">
            <h3>Cart<span>(0)</span></h3>
        </Link>
        </>
    )
}

export default ProductCart;