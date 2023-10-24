import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Brand from "../pages/Brand/Brand";
import Details from "../pages/Details/details";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import AddProducts from "../pages/AddProducts/AddProduct";

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
                path: '/addProduct',
                element: <PrivateRoute><AddProducts/></PrivateRoute>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart/></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/cart')
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
                element: <PrivateRoute><Brand/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/brand/${params.brandName}`)    
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/product/${params.id}`)
            },
            {
                path: '/updateProduct/:id',	
                element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/product/${params.id}`)
            }
        ]
    }
])

export default router;