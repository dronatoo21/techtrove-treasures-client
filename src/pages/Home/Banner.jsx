const Banner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-400 to bg-gray-700 items-center">
                <div className="flex items-center justify-between px-5 md:px-5 lg:px-24 md:py-10">
                  <h1 className="mb-5 text-2xl md:text-5xl text-gray-800 font-bold">Welcome to <span className="text-white">TechTrove</span></h1>
                  <img className="w-48 md:w-96 lg:w-[500px]" src="https://i.ibb.co/wy4X6cN/bannerpic.png" alt="banner-pic" />
                </div>
            </div>
        </div>
    );
};

export default Banner;