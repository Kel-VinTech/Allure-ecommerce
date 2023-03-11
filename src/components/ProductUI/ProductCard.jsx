import { MdEast } from "react-icons/md";
import "/src/scss/ProductUI.scss";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const ProductCard = ({item}) => {
    console.log(item);
    console.log("Hello World");
    return (
        <div className="single_product">
            <div className="product_img">
                <motion.img whileHover={{scale:0.9}}  src={item.imgUrl} alt="" />
            </div>
            <div className="product_content">
                <h3>{item.productName}</h3>
                <h3>hello</h3>
                <span>${item.price}</span>
                <span>${item.category}</span>
                <Link to="#">
                    <p>Add to cart</p>
                    <MdEast />
                </Link>
            </div>
        </div>
    )
    
}

export default ProductCard;