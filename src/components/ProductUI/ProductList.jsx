import ProductCard from "./ProductCard"
import "/src/scss/ProductUI.scss";

const ProductList =({data}) => {
    return(
        <div className="store_grid">
            {
            data?.map(item =>(
               <>
               <ProductCard item={item} /> 
               </>
            ))
        }
        </div>
    )
}

export default ProductList;