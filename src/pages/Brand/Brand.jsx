import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/productCard";

const Brand = () => {

    const [allProducts, setAllProducts] = useState(); 
    const { brandName } = useParams();
    console.log(brandName);

    useEffect(() => {
        fetch('http://localhost:3000/product', {

        })
        .then(res => res.json())
        .then(data => {
            const products = data?.filter(newData => newData?.brandName === brandName)
            setAllProducts(products)
        })
    },[])

    console.log(allProducts);


    return (
        <div>
            <h1>hi {brandName}</h1> 
            <div className="grid my-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    allProducts?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }     
            </div>          
        </div>
    );
};

export default Brand;