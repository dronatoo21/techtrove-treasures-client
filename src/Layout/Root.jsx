import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav />
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Root;