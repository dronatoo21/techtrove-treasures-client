import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Discount from "./Discount";
import OurTeam from "./OurTeam";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner/>
            <h1 className="font-bold text-xl mt-7 mb-5 md:text-2xl lg:text-3xl text-center">Brands</h1>
            <div className="grid grid-cols-3 md:gap-5 md:px-5 md:grid-cols-3 lg:grid-cols-3 container mx-auto">
                {
                    brands.map(brand => <Brands key={brand._id} brand={brand}/>)
                }
            </div>
            <Discount/>
            <h1 className="font-bold text-xl mt-7 mb-5 md:text-2xl lg:text-3xl text-center">Our Members</h1>
            <OurTeam/>
            <Review/>
        </div>
    );
};

export default Home;