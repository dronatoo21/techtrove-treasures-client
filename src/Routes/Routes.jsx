import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import AddCart from "../pages/AddCart/AddCart";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
// import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Brand from "../pages/Brand/Brand";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:3000/brand')
            },
            {
                path: '/addtocart',
                element: <PrivateRoute><AddCart/></PrivateRoute>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/brand/:brandName',
                element: <Brand/>,
                loader: ({params}) => fetch(`http://localhost:3000/brand${params.brandName}`)    
            }
        ]
    }
])

export default router;