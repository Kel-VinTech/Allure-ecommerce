import { MdEast } from "react-icons/md";

const ProductCard = () => {
    return (
        <div className="single_product">
            <div className="product_img">

            </div>
            <h3>Lorem, ipsum dolor.</h3>
            <span>$45.00</span>
            <button>
                <p>Add to cart</p>
                <MdEast />
            </button>
        </div>
    )
}

export default ProductCard;