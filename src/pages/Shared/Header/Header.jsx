
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black hover:text-black focus:text-white bg-transparent underline" : ""}>Home</NavLink></li>
        <li><NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black hover:text-black focus:text-white  bg-transparent underline" : ""}>Add product</NavLink></li>
        <li><NavLink to="/myCart" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black hover:text-black focus:text-white bg-transparent underline" : ""}>My Cart</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'><a className="normal-case flex gap-2 text-3xl font-medium text-black"><img src="/src/assets/logo.png" alt="" className="w-10" />eShopHub</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ?
                        <ul className="menu menu-horizontal px-1">
                            <li><div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                                </div>
                            </div></li>
                            <li><p>{user?.displayName ? user?.displayName : "User"}</p></li>
                            <li onClick={handleSignOut}><a>SignOut</a></li>
                        </ul>
                        :
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black hover:text-black focus:text-white bg-transparent underline" : ""}>Login</NavLink></li>
                        </ul>

                }
            </div>

        </div>
    );
};

export default Header;