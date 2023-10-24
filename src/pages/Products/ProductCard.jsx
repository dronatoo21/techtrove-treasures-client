import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    const {_id, imageUrl, name, price, type, brandName, shortDes,} = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[650px]">
              <figure><img className="w-52 h-48" src={imageUrl} alt="products" /></figure>
              <div className="card-body">
                <p className="badge border-2 border-gray-300 px-4 mx-auto font-bold">{brandName} - {type}</p>
                <h2 className="card-title">{name}</h2>
                {
                        shortDes.length > 150 ? <p className="font-normal">{shortDes.slice(0, 150)} <Link to={`#`} className="text-blue-800 font-semibold">Read more...</Link></p> : <p>{shortDes}</p>
                }
                <p className="font-semibold">Price: {price} BDT</p>
                <div className="rating">
                  <input type="radio" name={`rating-${_id}`} className="mask mask-star" />
                  <input type="radio" name={`rating-${_id}`} className="mask mask-star" />
                  <input type="radio" name={`rating-${_id}`} className="mask mask-star" />
                  <input type="radio" name={`rating-${_id}`} className="mask mask-star" />
                  <input type="radio" name={`rating-${_id}`} className="mask mask-star" />
                </div>
                <div className="card-actions my-3 justify-center">
                  <Link to={`/delails/${_id}`}><button className="btn btn-neutral">Details</button></Link>
                  {/* <button className="btn btn-neutral">Details</button> */}
                  <Link to={`/updateProduct/${_id}`}><button className="btn btn-neutral">Update</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;