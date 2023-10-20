import { useLoaderData } from "react-router-dom";

const ProductDetails = () => { 
    const singleProduct = useLoaderData();
    console.log(singleProduct.desc)
    return (
        <div className="py-20">
            <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto">
                <figure><img src={singleProduct.photo} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleProduct.name}</h2>
                    <p>{singleProduct.desc}</p>
                    <p>Price: {singleProduct.price}</p>
                    <p>Rating: {singleProduct.rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;