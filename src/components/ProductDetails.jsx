import { useParams } from "react-router-dom"
import products from '/src/data/products.js';
  

const ProductDetails =() =>{
    const {id} = useParams();
    const product = products.find((item) => item.id === id);
    // const {productName, imgUrl, price, shortDesc, description} = product

    return(
        <div className="this">
            <h1>productName</h1>
        </div>
    )
}

export default ProductDetails;