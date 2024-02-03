import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaHeart } from "react-icons/fa6";
import CommentsView from "./CommentsView";

const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    console.log(userEmail)
    const singleBlog = useLoaderData();
    const handleAddToCart = singleBlog => {
        const cart = {
            email: userEmail,
            photo: singleBlog.photo,
            name: singleBlog.title,
            blogId: singleBlog._id

        }
        fetch(`http://localhost:5000/storedBlog`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success('Add to Favorite Successfully')
                }
                else {
                    toast.error('Blog Already Added')
                }

            })
    }

    useEffect(() => {
        const url = ` http://localhost:5000/tasks-comments?taskId=${singleBlog._id}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setComments(actualData);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [singleBlog._id, loading]);


    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email || 'unregistered';
        const reviewMsg = form.reviewmsg.value;
        const userphoto = form.userphoto.value;
        console.log(username, reviewMsg, email, userphoto);

        const review = {
            taskId: singleBlog._id,
            title: singleBlog.title,
            comment: reviewMsg,
            comment_date: new Date().getTime(),
            commenter_info: {
                userID: user?.uid,
                userName: username,
                userEmail: user?.email,
                userPhoto: userphoto
            }
        }

        fetch(' http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review receive successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }
    const handleClose = ()=>{
        const modalid = document.getElementById('review_modal');
        modalid.removeAttribute('open');
    }
    return (
        <div className="py-20">
            <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto">
                <figure className="h-72"><img src={singleBlog.photo} alt="product" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{singleBlog.title}</h2>
                        <span className="text-xs">{singleBlog.createdDate}</span>
                    </div>
                    <p>{singleBlog.body}</p>
                    <div className="card-actions items-center justify-end">
                        <span onClick={() => handleAddToCart(singleBlog)} className="text-lg me-2"><FaHeart className="text-lg cursor-pointer" /></span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={() => window.review_modal.showModal()}>Write your review</button>
                    </div>
                    <div className={!(singleBlog.length <= 0) ? 'hidden' : 'block'}>
                        <p className='text-2xl font-semibold text-gray-500 text-center mt-12 mb-12'>No Reviews Yet Added</p>
                    </div>
                    {comments.map(review => <CommentsView key={review._id} review={review} setLoading={setLoading}></CommentsView>)}
                </div>
            </div>
            <Toaster />
            <>
                <dialog id="review_modal" type="checkbox" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box" onSubmit={handleSubmitReview}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered" defaultValue={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea name="reviewmsg" className="textarea textarea-bordered h-24 w-full" placeholder="Write Your Review" required></textarea>
                            <input type="text" placeholder="photo" name="userphoto" className="input input-bordered hidden" value={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                        </div>
                        <div className="modal-action" htmlFor="review_modal">
                            <button onClick={handleClose}  className="btn">Submit Review</button>
                        </div>
                    </form>
                </dialog>
            </>
        </div>
    );
};



export default BlogDetails;