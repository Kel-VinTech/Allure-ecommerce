import { useParams } from "react-router-dom"
import products from '/src/data/products.js';
  

const ProductDetails =() =>{
    const id = useParams();
    const product = products.find((item) => item.id === id);

    const {imgUrl,productName, price, shortDesc, description} = product;

    return(
        <div className="cart_container">
            <div className="cart_img"></div>
            <div className="cart_messages">

            </div>
        </div>
    )
}

export default ProductDetails;