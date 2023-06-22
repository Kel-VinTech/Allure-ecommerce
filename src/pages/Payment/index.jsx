import React from "react";
import { NavLink, useLocation,Link } from "react-router-dom";
import "/src/scss/Payment.scss";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import {BiLock} from "react-icons/bi"

import carbon from "/src/assets/images/carbon_radio-button-checked.png"
import master from "/src/assets/images/Mastercard - png 0.png"
import visa from "/src/assets/images/Visa Inc. - png 0.png"


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
                        >Shipping details
                        </NavLink>
                        <NavLink to="#"
                         style={NavLinkStyle}
                        >Payment details
                        <div className="cart-line2"></div></NavLink>
                    </div>
                    <div className="cart-line"></div>               
                </div>
                <div className="payment-information row">
                    <div className="payment-text">
                        <h2>Payment method</h2>
                        <span><BiLock/><p>Secure server</p></span>
                    </div>


                    <div className="payment-items">
                        <div className="card-details">
                            <div className="card-details_head">
                                <div className="logo">
                                    <span>
                                    <img className="circle_card" src={carbon} alt="" />
                                    <p>Credit card</p>
                                    </span>
                                    <div className="card-images">
                                        <img className="card_image" src={master} alt="" />
                                        <img className="card_image" src={visa} alt="" />
                                    </div>
                                </div>
                                <p className="describe">Safe money transfer using your bank 
                                account;Visa , Mastercard or Verve.</p>

                                <form action="#">
                                    
                                </form>
                            </div>

                        </div>
                        <div className="info-summary">
                            <h2>Payment Summary</h2>

                            <div className="cart-line3"></div>

                            <p>23, Abraham Julie Street, Opp. GLK Church, IKeja, Lagos.</p>

                            <div className="cart-line3"></div>

                            <p>Expected arrival date: Between 22nd September and 26th September 2023</p>

                            <div className="cart-line3"></div>

                                    <div className="cart-foot-info">
                                <div className="cart-checkout2">
                                        <div className="checkout-details">
                                            <div className="text">
                                                <p>Products in cart :</p>
                                                <p className="text-info-right">{totalQuantity} items</p>
                                            </div>
                                            <div className="text">
                                                <p>Shipping :</p>
                                                <p className="text-info-right">$2.50</p>
                                            </div>
                                            <div className="text">
                                                <p>Total :</p>
                                                <p className="text-info-right">${totalAmount}.00</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </main>
    )
}

export default Payment;
