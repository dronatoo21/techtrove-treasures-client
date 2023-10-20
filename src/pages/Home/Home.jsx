import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <h1 className="font-bold text-3xl text-center">Brands</h1>
            <div className="grid grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    brands.map(brand => <Brands key={brand.id} brand={brand}/>)
                }
            </div>
        </div>
    );
};

export default Home;