import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;