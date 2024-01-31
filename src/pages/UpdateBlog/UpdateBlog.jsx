import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    // console.log(product);
    const { _id, photo, title, body } = product;
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const body = form.body.value;

        const updateBlog = { photo, title, body }
        console.log(updateBlog);
        fetch(`http://localhost:5000/blog/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Blog Updated Successfully')
                    navigate('/')
                }
            })

    }
    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Update a Blog</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form img and name row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Blog Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Blog Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form brand name and type row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="body" defaultValue={body} className="textarea textarea-bordered w-full" placeholder="Write Short Description"></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block" />
            </form>
            <Toaster />
        </div>
    );
};

export default UpdateBlog;