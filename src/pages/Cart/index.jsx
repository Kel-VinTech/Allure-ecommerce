import React from "react";
import { Link } from "react-router-dom";
import "/src/scss/Cart.scss";

const Cart = () => {
    return <main>
        <div className="cart">
            <div className="cart-heading">
                <div className="cart-links">
                <Link to="#">Shopping cart</Link>
                <Link to="#">Shipping details</Link>
                <Link to="#">Payment details</Link>
                </div>
                <div className="cart-line"></div>
            </div>
        </div>
    </main>
}

export default Cart