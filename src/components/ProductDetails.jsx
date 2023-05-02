import { useParams } from "react-router-dom"
import products from '/src/data/products.js';
import "/src/scss/ProductDetails.scss";
  

const ProductDetails =() =>{
    const {id} = useParams();
    const product = products.find(item => item.id === id);
    const {productName, imgUrl, price, shortDesc, description} = product

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
                    <button>hello</button>
                    <button>ADD TO CART</button>
                </div>
        </main>
    )
}

export default ProductDetails;