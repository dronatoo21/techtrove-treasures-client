import { Link } from "react-router-dom";

const Brands = ({brand}) => {

    const { brand_name, brand_image} = brand;

    return (
        <Link to={`/brand/${brand_name}`}>
          <div className="p-1 lg:p-10 dark:text-gray-900">
            <div className="card card-compact dark:bg-gray-800 bg-base-100 border-2 px-5">
              <figure><img className="md:w-full h-20 md:h-40" src={brand_image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-sm md:text-2xl dark:text-white font-extrabold mx-auto">{brand_name}</h2>
              </div>
            </div>
          </div>
        </Link>
    );
};

export default Brands;