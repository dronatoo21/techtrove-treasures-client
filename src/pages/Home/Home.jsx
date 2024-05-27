import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Discount from "./Discount";
import OurTeam from "./OurTeam";
import Banner from "./Banner/Banner";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner/>
            <h1 className="font-bold text-3xl text-center mt-14">Brands</h1>
            <div className="grid grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    brands.map(brand => <Brands key={brand._id} brand={brand}/>)
                }
            </div>
            <Discount/>
            <h1 className="font-bold text-3xl text-center mt-16">Our Members</h1>
            <OurTeam/>
        </div>
    );
};

export default Home;