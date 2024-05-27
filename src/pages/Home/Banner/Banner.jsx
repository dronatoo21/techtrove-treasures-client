import banner from '../../../assets/Banner/TechTrove.png'
const Banner = () => {
    return (
        <div className="lg:h-[90vh] md:h-[70vh] h-[30vh] mb-16">
            <img className="lg:h-[90vh] md:h-[70vh] h-[30vh] w-full" src={banner} alt="" />
        </div>
    );
};

export default Banner;