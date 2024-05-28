import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    const {_id, imageUrl, name, price, type, brandName, shortDes, ratings} = product;

    return (
        <div>
            <div className="card dark:bg-zinc-800 bg-base-100 shadow-xl h-[650px] dark:text-white">
              <figure><img className="w-52 h-48 rounded-lg" src={imageUrl} alt="products" /></figure>
              <div className="card-body">
                <p className="badge border-2 border-gray-300 px-4 mx-auto font-bold">{brandName} - {type}</p>
                <h2 className="card-title">{name}</h2>
                {
                        shortDes.length > 150 ? <p className="font-normal">{shortDes.slice(0, 150)} <Link to={`/details/${_id}`} className="text-blue-800 font-semibold">Read more...</Link></p> : <p>{shortDes}</p>
                }
                <p className="font-semibold">Price: {price} BDT</p>
                <p className="text-lg font-medium">Ratings : {ratings}/5</p>
                <div className="card-actions my-3 justify-center">
                  <Link to={`/details/${_id}`}><button className="btn btn-neutral">Details</button></Link>
                  <Link to={`/updateProduct/${_id}`}><button className="btn btn-neutral">Update</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;