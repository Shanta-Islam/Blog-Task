import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const singleProduct = useLoaderData();
    const handleAddToCart = singleProduct => {
        const cart = {
            email: user.email,
            productName: singleProduct.name,
            productPrice: singleProduct.price,
            productBName: singleProduct.brandName

        }
        fetch('https://eshophub-server-shanta-islam.vercel.app/storeProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    toast.success('Add to Cart Successfully')
                }

            })
            toast.success('Add to Cart Successfully')
    }
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
                        <button onClick={() => handleAddToCart(singleProduct)} className="btn">Add to Cart</button>
                    </div>

                </div>

            </div>
        <Toaster />

        </div>
    );
};



export default ProductDetails;