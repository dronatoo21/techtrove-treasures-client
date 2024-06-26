import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CartProduct = ({product, products, setProducts}) => {
    const {_id, imageUrl, name, price, type, brandName, shortDes, ratings} = product;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://techtrove-treasures-server-swart.vercel.app/cart/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                      )
                      const remaining = products?.filter(item => item._id !== _id);
                      setProducts(remaining);
            }
          })
        }
      })
    }
    return (
        <div>
            <div>
            <div className="card dark:bg-zinc-800 dark:text-white bg-base-100 shadow-xl lg:h-[650px]">
              <figure><img className="w-52 rounded-lg h-48" src={imageUrl} alt="products" /></figure>
              <div className="card-body">
                <p className="badge border-2 border-gray-300 px-4 mx-auto font-bold">{brandName} - {type}</p>
                <h2 className="card-title">{name}</h2>
                {
                        shortDes.length > 150 ? <p className="font-normal md:text-base text-sm">{shortDes.slice(0, 150)} <Link to={`/details/${_id}`} className="text-blue-800 font-semibold">Read more...</Link></p> : <p>{shortDes}</p>
                }
                <p className="font-semibold">Price: {price} BDT</p>
                <p className="text-base lg:text-lg font-medium">Ratings : {ratings}/5</p>
                <div className=" my-3 justify-center">
                  <button onClick={() => handleDelete(_id)} className="btn w-full btn-neutral">Delete</button>
                </div>
              </div>
            </div>
        </div>                
        </div>
    );
};

export default CartProduct;