const Discount = () => {
    return (
        <div className="flex justify-between md:flex-row flex-col items-center bg-gradient-to-r my-20 rounded-xl from-gray-700 to bg-gray-300 px-16 py-10">
            <div>
                <h1 className="text-3xl text-white font-semibold">Purchase taka 2000 or above & get <span className="font-extrabold">10% off</span></h1>
                <p className="text-lg font-semibold text-white mt-3">Use promo code <span className="btn">SELL2000</span></p>
            </div>
            <img className="rounded-full w-48 md:w-72 lg:mt-0 md:mt-0 mt-9" src="https://i.ibb.co/fXD8rdw/FLASH-SALE.png" alt="discount" />
        </div>
    );
};

export default Discount;