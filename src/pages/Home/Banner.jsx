import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9rDPyQS/hero-img.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Create a blog and share your voice in minutes.</h1>
                    <p className="mb-5">This website makes it more easy to share your ideas. Signup free to start.</p>
                    <Link to='/login'><button className="btn btn-grey-600">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;