const Brands = ({brand}) => {

    const {brand_name, brand_image} = brand;

    return (
        <div className="p-10">
            <div className="card card-compact bg-base-100 border-2 p-5">
              <figure><img className="w-full h-40" src={brand_image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-extrabold mx-auto">{brand_name}</h2>
              </div>
            </div>
        </div>
    );
};

export default Brands;