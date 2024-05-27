import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../pages/Shared/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Root;