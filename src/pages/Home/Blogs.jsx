import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="mt-10">
            <h2 className="text-xl font-medium text-center mb-5">Blogs</h2>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    blogs?.map(blog => <Link to={`blog-details/${blog._id}`} key={blog._id} ><div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full h-72" src={blog.photo} alt="Mountain" />
                        <div className="px-6 py-1">
                            <div className="font-bold text-xl mb-2">{blog.title}</div>
                            <p className="text-base">
                                {blog.body.slice(0, 70)}...
                            </p>
                        </div>
                    </div></Link>)
                }
            </div>
        </div>

    );
};

export default Blogs;