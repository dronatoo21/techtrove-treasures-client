import { useLoaderData } from "react-router-dom";
import ProductCard from "../Products/productCard";

const BrandProducts = () => {

    const products = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:my-9 md:grid-cols-2 gap-5 p-5 lg:grid-cols-4">
            { 
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default BrandProducts;