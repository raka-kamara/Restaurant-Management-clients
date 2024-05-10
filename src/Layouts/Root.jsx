import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <div className="font-poppins">
        <Navbar></Navbar>
        <Outlet></Outlet>        
        </div>
    );
};

export default Root;