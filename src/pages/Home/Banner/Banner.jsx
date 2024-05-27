import banner from '../../../assets/Banner/TechTrove.png'
const Banner = () => {
    return (
        <div className="h-[100vh]">
            <img className="lg:h-[90vh] md:h-[70vh] h-[30vh] w-full" src={banner} alt="" />
        </div>
    );
};

export default Banner;