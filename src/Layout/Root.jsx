import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;