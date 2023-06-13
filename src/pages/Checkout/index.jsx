import React from "react";
import { NavLink, useLocation,Link } from "react-router-dom";
import "/src/scss/Checkout.scss";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import {TiDeleteOutline} from "react-icons/ti"

const Checkout = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)

    const NavLinkStyle = ({isActive})=> {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color : isActive ? "#292929": "",
            
        }
    }

    return <main>
        <div className="cart-check row">
            <div className="cart-heading">
                <div className="cart-links">
                    <NavLink to="/cart"
                    >Shopping cart
                    </NavLink>
                    <NavLink to="/checkout"
                    style={NavLinkStyle}
                    >Shipping details
                    <div className="cart-line2"></div>
                    </NavLink>
                    <NavLink to="#">Payment details</NavLink>
                
                </div>
                <div className="cart-line"></div>               
            </div>

            <div className="checkout-details row">
                <div className="form-details">
                    <form action="" method="get">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    {/* Get updates about new arrivals & exclusive offers */}
                    
                    
                    <label htmlFor="text">Full Name</label>
                    <input type="text" name="text" id="text" />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />

                    <div className="location">
                        <label htmlFor="country">Country</label>
                        <label htmlFor="postal">Postal code</label>
                    </div>
                    <div className="location">
                        <input type="text" name="country" id="country" />
                        <input type="text" name="postal" id="postal" />
                    </div>

                    <label htmlFor="phone" >Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder="08123456785" />

                    <Link to="#">Proceed to payment</Link>
                    </form>
                </div>
                <div className="checkout-items">
                {
                            cartItems.map((item, index) => (
                                <Tr item={item} key={index} />
                           
                           ))}
                </div>

            </div>
         </div>
    </main>
}




const Tr = ({item}) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
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
                        <span>1</span>
                    </div>
                </div>
                <div className="items-functions">
                    <i
                    ><TiDeleteOutline
                    onClick={deleteProduct}
                    /></i>
                    <h2>${item.price}</h2>
                </div>

                </div>
                <div className="cart-line1"></div>
                
                                </section>
    )
}

export default Checkout;