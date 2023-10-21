import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData();
    // console.log(product);
    const {_id, photo, name, brandName, type, price, rating} = product;
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.bName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updateProduct = { photo, name, price, brandName, type,  rating}
        console.log(updateProduct);
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    toast.success('Product Updated Successfully')
                }
            })

    }
    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Update a Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form img and name row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form brand name and type row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="bName" placeholder="Brand Name" className="input input-bordered w-full" /> */}
                            <select className="select select-bordered w-full" name='bName' defaultValue={brandName} >
                                <option>Amazon</option>
                                <option>Walmart</option>
                                <option>Alibaba</option>
                                <option>eBay</option>
                                <option>Target</option>
                                <option>BEST BUY</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type}  placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and description row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" defaultValue={price}  placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={rating}  placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Submit" className="btn btn-block" />

            </form>
            <Toaster />
        </div>
    );
};

export default UpdateProduct;