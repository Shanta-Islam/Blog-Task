import { HiMoon, HiSun } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaHtml5 } from "react-icons/fa6";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Log Out');
            })
            .catch()
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cbbdfe] font-bold hover:text-[#cbbdfe] focus:text-[#cbbdfe] bg-transparent underline " : ""}>Home</NavLink></li>
        <li><NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cbbdfe] font-bold hover:text-[#cbbdfe] focus:text-[#cbbdfe]  bg-transparent underline" : ""}>Add product</NavLink></li>
        <li><NavLink to={`/storeProduct/${user?.email}`} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cbbdfe] font-bold hover:text-[#cbbdfe] focus:text-[#cbbdfe] bg-transparent underline" : ""}>My Cart</NavLink></li>
    </>


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

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
                {
                    theme=== 'light' ?
                    <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-black"><img src="../../../assets/logo-2.png" alt="" className="w-6 lg:w-10" />eShopHub</a></Link>
                    : <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-white"><img src="../../../assets/logo-1.png" alt="" className="w-6 lg:w-10" />eShopHub</a></Link>
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end lg:flex items-center">
                <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-6 h-6">
                        <input type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true} />
                        <HiSun className="w-6 h-6 swap-on"></HiSun>
                        <HiMoon className="w-6 h-6 swap-off"></HiMoon>
                    </label>
                </button>
                {
                    user ?
                        <ul className="menu-horizontal px-3">
                            <li className="mx-3"><div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                                </div>
                            </div></li>
                            <li className="mx-3"><p>{user?.displayName ? user?.displayName : "User"}</p></li>
                            <li className="mx-3 cursor-pointer" onClick={handleSignOut}><a>SignOut</a></li>
                        </ul>
                        :
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black hover:text-black focus:text-white bg-transparent underline" : ""}>Login</NavLink></li>
                        </ul>

                }
            </div>
            <Toaster />
        </div>
    );
};

export default Header;