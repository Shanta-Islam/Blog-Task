import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.bName.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;

        const newProduct = { photo, name, price, brandName, type, desc, rating }
        console.log(newProduct);
        fetch('https://eshophub-server-shanta-islam.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Product Added Successfully')
                }
                form.reset();
            })

    }

    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form img and name row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
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
                            <select className="select select-bordered w-full" name='bName'>
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
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
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
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" /> */}
                            <select className="select select-bordered w-full" name="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="desc" className="textarea textarea-bordered w-full" placeholder="Write Short Description"></textarea>
                        </label>
                    </div>


                </div>

                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
            <Toaster />
        </div>
    );
};

export default AddProduct;