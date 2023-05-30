import { useParams } from "react-router-dom"
import products from '/src/data/products.js';
import "/src/scss/ProductDetails.scss";
import ProductList from "./ProductUI/ProductList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from 'react-toastify';

const ProductDetails =() =>{

    const {id} = useParams();
    const product = products.find(item => item.id === id);
    const {productName, imgUrl, price, shortDesc, description,category} = product

    const relatedProducts = products.filter((item) => item.category === category);

    const [relatedProduct, setRelatedProduct] = useState(true) 

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItems({
            id,
            image: imgUrl,
            productName,
            price,
        })
        )
        toast.success("Product added successfully")
    }

    return(

        <main className="row">
            <div className="cart-container">
                <div className="cart-image">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="cart-text">
                    <h1>{productName}</h1>
                    <h3>${price}.00</h3>
                    <hr />
                    <p className="note">
                        {shortDesc}
                    </p>
                    <hr />
                    <p className="description">
                        {description}
                    </p>
                    <hr />
                </div>
                
            </div>
            <div className="cart-button">
                    <button className="btn-1">HELLO</button>
                    <button className="btn-2" onClick={addToCart}>ADD TO CART</button>
            </div>

            <div className="cart-related">
                <h2>Related products</h2>
                <p>View More</p>
                <div className="related-content">
                    <ProductList data={relatedProducts}
                    className={relatedProduct? "product-direction" : "" }
                    />
                </div>
            </div>
        </main>
    )
}

export default ProductDetails;