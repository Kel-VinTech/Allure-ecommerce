import React from "react";
import { NavLink, useLocation,Link } from "react-router-dom";
import "/src/scss/Payment.scss";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import {BiLock} from "react-icons/bi"


const Payment = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const totalQuantity = useSelector(state => state.cart.totalQty)

    const NavLinkStyle = ({isActive})=> {
        return {
            color : isActive ? "#292929": "",
            
        }
    }

    return (
        <main>
            <div className="cart-check row">
                <div className="cart-heading">
                    <div className="cart-links">
                        <NavLink to="/cart"
                        >Shopping cart
                        </NavLink>
                        <NavLink to="/checkout"
                        style={NavLinkStyle}
                        >Shipping details
                        </NavLink>
                        <NavLink to="#">Payment details
                        <div className="cart-line2"></div></NavLink>
                    </div>
                    <div className="cart-line"></div>               
                </div>
                <div className="payment-text row">
                    <h2>Payment method</h2>
                    <span><BiLock/><p>Secure server</p></span>
                </div>

                <div className="payment-items">
                    <div className="card-details"></div>
                    <div className="info-summary"></div>
                </div>
            </div>
        </main>
    )
}

export default Payment;
