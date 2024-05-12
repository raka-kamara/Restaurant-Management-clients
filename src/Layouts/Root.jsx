import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
        <Navbar></Navbar>
        <div className="mx-4 py-2 px-7 min-h-[calc(100vh-256px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>        
        </div>
    );
};

export default Root;