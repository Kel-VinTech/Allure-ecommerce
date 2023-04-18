import { useState, useEffect } from "react";
import "/src/scss/ProductPage.scss";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductUI/ProductList";
import products from '/src/data/products.js';

import { MdChevronLeft,MdChevronRight } from "react-icons/md";




const Product = () => {
        const [mobile, setMobile] = useState(false)
    
    const [data, setData] = useState(products)
    // filter the products base on the category

    return(
       <section className="product_store">
        <div className="heading-txt">
            <h2>Our Collections</h2>
            <button className="filter-btn"  onClick={() => setMobile(!mobile)}>
                            {mobile? 
                            <span className="filter">
                            <h3>Add filter </h3>
                            <MdChevronLeft />
                            </span> :
                        <span className="filter">
                        <h3>Add filter
                        </h3><MdChevronRight /></span>}
            </button>
        </div>
        <div  className="product-shop ">
        <aside 
        className={mobile? "filter-aside active" : "sidebar"}
        onClick={()=> setMobile(false)}
            >
           <div className="aside_content">
           <h2>
                Sort by
            </h2>
            <div className="new-release">
                <Link to="#">
                   New Release
                </Link>
                <Link to="#"  onClick={() => {
                        const filtered = [...products].sort((a, b) => b.price - a.price);
                        setData(filtered);
                    }}>
                    Price : High to Low
                </Link>
                <Link to="#" onClick={() => {
                    const filtered = [...products].sort((a,b) => a.price - b.price);
                    setData(filtered)
                }}>
                    Price : Low to High
                </Link>
            </div>
            <div className="select-category">
                <h2>Category</h2>
                <div  className="checks">
                    <input type="checkbox" name="scrub" 
                        onChange={() => {
                            const filteredProducts = products.filter(
                                (item) => item.category === "scrub"
                                );
                
                            setData(filteredProducts);
                        }}
                    id="scrub" />
                    <label htmlFor="scrub">Body scrubs</label><br/>
                    <input type="checkbox" name="Lip"
                        onChange={() => {
                            const filteredProducts = products.filter(
                                (item) => item.category === "li["
                                );
                
                            setData(filteredProducts);
                        }}
                    id="lip" />
                    <label htmlFor="Lip">Lip care</label><br/>
                    <input type="checkbox" name="glow" 
                        onChange={() => {
                            const filteredProducts = products.filter(
                                (item) => item.category === "glow"
                                );
                
                            setData(filteredProducts);
                        }}
                    id="glow" />
                    <label htmlFor="Glow">Glow recipe</label><br/>
                    <input type="checkbox" onChange={() => {
                        const filteredProducts = products.filter(
                            (item) => item.category === "moisturizers"
                            );
            
                        setData(filteredProducts);
                    }} id="moisturizers"/>
                    <label htmlFor="moisturizers">Moisturizers</label><br/>
                </div>
            </div>

            <div   className="price-category">
                <h2>Price</h2>
                <Link to="#"
                    onClick={() => {
                        const filtered = products.filter((product) => product.price);
                        setData(filtered);
                    }}
                >All</Link>
                <Link  to="#" 
                    onClick={() => {
                        const filtered = products.filter((product) => product.price < 100);
                        setData(filtered);
                    }}
                >Below $100.00</Link>
                <Link to="#"
                    onClick={() => {
                        const filtered = products.filter((product) => product.price >= 100 && product.price <= 150);
                        setData(filtered);
                    }}
                >$100.00 - $150.00</Link>
                <Link to="#"
                onClick={() => {
                    const filtered = products.filter((product) => product.price >= 150 && product.price <= 200);
                    setData(filtered);
                }}  
                >$150.00 - $200.00</Link>
                <Link to="#"
                    onClick={() => {
                        const filtered = products.filter((product) => product.price >= 200);
                        setData(filtered);
                    }}
                >Above $200.00</Link>
            </div>
           </div>
        </aside>


        <main>
            <div className="product-container">
                {
                    data.length === 0? <h1>No products found!</h1>
                    : <ProductList data={data} />
                }
            </div>
        </main>
        </div>
       </section>
    )
}

export default Product;