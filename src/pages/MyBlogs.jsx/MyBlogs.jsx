import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";

const MyBlog = () => {
    const loadedStoreBlogs = useLoaderData();
    const [items, setItems] = useState(loadedStoreBlogs);
    // console.log(items)
    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/blog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    // remove the user from the UI
                    const remainingUsers = items && items.filter(item => item?._id !== id);
                    setItems(remainingUsers);
                }
            })
    }
    return (
        <div className="p-20">
            <h2 className="text-center">Favorite Items: {loadedStoreBlogs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Blog Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map(item => <tr key={item?._id}>
                                <td><img src={item?.photo} alt="" className="w-10 h-10 rounded-full" /></td>
                                <td>{item?.title}</td>
                                <td className="flex items-center">
                                    <button
                                        onClick={() => handleDelete(item?._id)} className="btn me-2"><FaRegTrashCan /></button>
                                    <Link to={`/updateBlog/${item?._id}`}><button className="btn">Update</button></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Toaster />
        </div >
    );
};

export default MyBlog; 