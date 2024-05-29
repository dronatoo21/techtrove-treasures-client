import CartProduct from "./CartProduct";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext)
    const [products, setProducts] = useState();
    useEffect(()=>{
        fetch(`https://techtrove-treasures-server-swart.vercel.app/usersCart?usersCart=${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <>
            <div className="md:min-h-[65vh] container mx-auto px-2">
                <h1 className="font-bold text-3xl text-center mt-14">Products you added</h1>
                {
                    products?.length != 0 ? <div className="grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        products?.map(product => <CartProduct key={product._id} product={product} products={products} setProducts={setProducts}></CartProduct>) 
                    }
                    </div> : <p className="text-center my-10">No products added.</p>
                }
                
            </div>
        </>
    );
};

export default MyCart;