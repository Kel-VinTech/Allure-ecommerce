import { MdEast } from "react-icons/md";
import "/src/scss/ProductUI.scss";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import ProductDetails from "./ProductDetails";
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";


const ProductCard = ({item}) => {
    const dispatch = useDispatch()

    const addToCart = () =>{
        dispatch(cartActions.addItems({
            id:item.id,
            productName: item.productName,
            image: item.imgUrl,
            price: item.price,
        }));
        toast.success("Product added successfully")
    }
    return (
        <div className="single_product">
            <div className="product_img">
                <motion.img whileHover={{scale:0.9}}  src={item.imgUrl} alt="" />
            </div>
            <div className="product_content">
                <Link to={`/src/pages/Product/index.jsx/:${item._id}`}>{item.productName}</Link>
                <span>${item.price}</span>
                <Link to="#" onClick={addToCart}>
                    <p>Add to cart</p>
                    <MdEast />
                </Link>
            </div>
        </div>
    )
    
}

export default ProductCard;