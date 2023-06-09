import React from "react";
import { NavLink, useLocation,Link } from "react-router-dom";
import "/src/scss/Cart.scss";
import image1 from "/src/assets/images/Rectangle 12.png"
import { motion } from "framer-motion";
import { cartActions } from "../../redux/slices/cartSlice";
import { useSelector,useDispatch } from "react-redux";



const Cart = () => {
    const NavLinkStyle = ({isActive})=> {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color : isActive ? "#292929": "",
            
        }
    }

    const cartItems = useSelector(state => state.cart.cartItems)

    return <main>
        <div className="cart-check">
            <div className="cart-heading">
                <div className="cart-links">
                <NavLink to="#"
                style={NavLinkStyle}
                >Shopping cart
                <div className="cart-line1"></div>
                </NavLink>
                <NavLink to="checkout"
                >Shipping details</NavLink>
                <NavLink to="#">Payment details</NavLink>
                
                </div>
                <div className="cart-line"></div>               
            </div>

           <div className="cart-items row">
           <div className="cart-line1"></div>
            {
                cartItems.length === 0? <h2>No items added to cart</h2> : (
                    <section className="cart-section">
                        {
                            cartItems.map((item, index) => (
                                <Tr item={item} key={index} />
                           
                           ))}
                      <div className="cart-foot-info">

                        <Link className="continue-shop" to="/product">Continue Shopping</Link>


                        <div className="cart-checkout2">
                            <div className="checkout-details">
                                <div className="text">
                                    <p>Products in cart :</p>
                                    <p className="text-info-right">6 items</p>
                                </div>
                                <div className="text">
                                    <p>Shipping :</p>
                                    <p className="text-info-right">$2.50</p>
                                </div>
                                <div className="text">
                                    <p>Total :</p>
                                    <p className="text-info-right">$114.00</p>
                                </div>
                            </div>
                            <Link className="checkout-link" to="#">Proceed to checkout</Link>
                        </div>
                        </div>  
                    </section>
                )
            }
              
           </div>
        </div>
    </main>
}


const Tr = ({item}) => {
    return (
        <section className="cart-section-2" >
            

                <div className="items">
                <div className="items-details">
                    <div className="item-image">
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="item-text">
                        <h2>{item.productName}</h2>
                        <p>Clearamane</p>
                        <p>Size: <span>200ml / 3.3 fl oz</span></p>
                        <button>1</button>
                    </div>
                </div>
                <div className="items-functions">
                    <button>delete</button>
                    <h2>${item.price}</h2>
                </div>

                </div>
                <div className="cart-line1"></div>
                
                                </section>
    )
}
export default Cart
