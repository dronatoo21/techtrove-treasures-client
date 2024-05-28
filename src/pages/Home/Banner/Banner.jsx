import banner from '../../../assets/Banner/TechTrove.png'
const Banner = () => {
    return (
        <div className="lg:h-[90vh] md:h-[50vh] h-[25vh] md:mb-16">
            <img className="lg:h-[90vh] md:h-[50vh] h-[25vh] w-full" src={banner} alt="" />
        </div>
    );
};

export default Banner;