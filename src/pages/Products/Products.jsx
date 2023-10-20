import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Banner from "../Home/Banner";

const Products = () => {
    const loadedProduct = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-2 py-20">
                {
                    loadedProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;