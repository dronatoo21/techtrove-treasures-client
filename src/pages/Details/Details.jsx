// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const {imageUrl, name, price, type, brandName, shortDes, ratings} = useLoaderData();

    return (
        <div className="my-20 p-5">
            <div className="card flex lg:flex-row flex-col card-side bg-base-100 shadow-xl">
              <div><img className="w-80 md:w-96 mx-auto" src={imageUrl} alt="product"/></div>
              <div className="card-body">
                <p className="badge border-2 border-gray-300 px-4 mx-auto lg:mx-0 font-bold">{type}</p>
                <h2 className="card-title"><span className="font-semibold">Name</span> : {name}</h2>
                <p className="font-medium text-lg"><span className="font-semibold">Brand</span> : {brandName}</p>
                <p className="font-medium"><span className="font-semibold text-lg">Features</span> : {shortDes}</p>
                <p className="font-semibold "><span className="font-semibold">Ratings</span> : {ratings}/5</p>
                <p className="font-semibold text-lg"><span className="font-semibold">Price</span> : {price} BDT</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Details;