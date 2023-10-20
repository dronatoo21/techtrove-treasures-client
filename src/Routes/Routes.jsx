import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import AddCart from "../pages/AddCart/AddCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/addtocart',
                element: <AddCart/>
            }
        ]
    }
])

export default router;