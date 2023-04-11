import ProductCard from "./ProductCard"
import "/src/scss/ProductUI.scss";

const ProductList =({data}) => {
    return(
        <div className="store_grid">
            {
            data?.map(item,index =>(
               <>
               <ProductCard item={item} key={index} /> 
               </>
            ))
        }
        </div>
    )
}

export default ProductList;