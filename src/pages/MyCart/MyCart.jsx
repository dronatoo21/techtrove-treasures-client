import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <>
            <h1 className="font-bold text-3xl text-center mt-14">Products you added</h1>
            <div className="grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    products?.map(product => <CartProduct key={product._id} product={product} products={products} setProducts={setProducts}></CartProduct>) 
                }
            </div>
        </>
    );
};

export default MyCart;