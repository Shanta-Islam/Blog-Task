import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const date = new Date().toDateString();
    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const userId = user?.uid;
        const photo = form.photo.value;
        const title = form.name.value;
        const body = form.desc.value;
        const createdDate = date;

        const newBlog = { title, photo, body, userId, createdDate}
        console.log(newBlog);
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Blog Added Successfully')
                }
                form.reset();
                navigate('/');
            })

    }

    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Add a Blog</h2>
            <form onSubmit={handleAddBlog}>
                {/* form img and name row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Blog Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Blog Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Blog Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and description row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="desc" className="textarea textarea-bordered w-full" placeholder="Write Short Description"></textarea>
                        </label>
                    </div>


                </div>

                <input type="submit" value="Add Blog" className="btn btn-block" />

            </form>
            <Toaster />
        </div>
    );
};

export default AddBlog;