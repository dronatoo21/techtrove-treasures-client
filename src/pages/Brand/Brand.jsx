import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/productCard";
import Slider from "./Slider";

const Brand = () => {

    const [allProducts, setAllProducts] = useState(); 
    const { brandName } = useParams();

    useEffect(() => {
        fetch('https://techtrove-treasures-server-swart.vercel.app/product', {

        })
        .then(res => res.json())
        .then(data => {
            const products = data?.filter(newData => newData?.brandName === brandName)
            setAllProducts(products)
        })
    },[])

    return (
        <div className="p-5 lg:p-0">
            <Slider/>
            <h1 className="font-bold text-3xl text-center mt-14">Products</h1>
            <div className="grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                   allProducts?.length < 1 ? <div className="relative my-16 md:my-60 md:w-[600px] lg:w-[900px] mx-auto"><h1 className="text-2xl md:text-5xl">Product not available in this brand</h1></div> : allProducts?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }     
            </div>          
        </div>
    );
};

export default Brand;