import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    return <main>
        <div className="cart">
    <div className="cart-link">
        <Link to="#">Shopping cart</Link>
        <Link to="#">Shipping details</Link>
        <Link to="#">Payment details</Link>
    </div>
        </div>
    </main>
}

export default Cart