import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav />
            <Outlet/>
            <Footer/>
            <ToastContainer/>
            <MessengerCustomerChat
               pageId="180357251829446"
               appId="1353697212176127"
             />,
        </div>
    );
};

export default Root;