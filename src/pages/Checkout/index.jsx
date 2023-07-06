import React from "react";
import { NavLink, useLocation,Link } from "react-router-dom";
import "/src/scss/Checkout.scss";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import {TiDeleteOutline} from "react-icons/ti"

const Checkout = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const totalQuantity = useSelector(state => state.cart.totalQty)

    const NavLinkStyle = ({isActive})=> {
        return {
            color : isActive ? "#292929": "",
            
        }
    }


    return <main>
        <div className="cart-check">
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
            </div>

            <div className="checkout-details">
                <div className="form-details row">
                    <form action="#" method="get" >
    

                    <label htmlFor="text">Full Name</label>
                    <input type="text" name="text" id="text" required />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" required/>

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" required />

                        <span id="location">
                            <div className="location">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" required/>
                            
                        </div>
                        <div className="location">
                            <label htmlFor="postal">Postal code</label>
                            <input type="text" name="postal" id="postal"  placeholder="001001" required/>
                        </div>
                    </span>

                    <label htmlFor="phone" >Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder="08123456785" required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  required/>
                    
                    <div className="checkbox">
   
                        <label htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" required />
                            Get updates about new arrivals & exclusive offers
                         </label>
                    </div>

                    </form>
                </div>
                <div className="checkout-items row">
                {
                            cartItems.map((item, index) => (
                                <Tr item={item} key={index} />
                           
                           ))}
                    
                </div>
            </div>

            <div className="checkout-foot-info">
                    <div className="foot-checkout2 row">
                    <Link className="pay_button" to="#">Proceed to payment</Link>
                    
                    

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
    </main>
}




const Tr = ({item}) => {

    const dispatch = useDispatch();
   

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        
        <section className="checkout-section" >
            
                <div className="checkout_items">
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