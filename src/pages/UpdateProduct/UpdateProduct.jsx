import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const [ratingSelect, setRatingSelect] = useState();

    const product = useLoaderData();
    const {_id} = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imgUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const updatedProduct = {imageUrl, name, brandName, type, price, ratings}
        console.log(updatedProduct);

        fetch(`https://techtrove-treasures-server-wine.vercel.app/product/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success',
          text: 'Product updated successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
      }
    })
    }
    return (
        <div>
            <>
        <h1 className="font-bold text-3xl text-center mt-16">Please Update the Product</h1>
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="form-control">
            <input type="text" name="imgUrl" placeholder="Image url" className="input w-3/5 mx-auto input-bordered" required />
            <input type="text" name="name" placeholder="Name" className="my-2 input w-3/5 mx-auto input-bordered" required />
            <input type="text" name="brandName" placeholder="Brand Name" className="input  w-3/5 mx-auto input-bordered" required />
            <input type="text" name="type" placeholder="Type" className="input my-2 w-3/5 mx-auto input-bordered" required />
            <input type="text" name="price" placeholder="Price" className="input mb-2 w-3/5 mx-auto input-bordered" required />
            <select value={ratingSelect} onChange={e => setRatingSelect(e.target.value)} className="input mb-2 w-3/5 mx-auto input-bordered" name="ratings" id="">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>      
        </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral w-3/5 mx-auto">Update Product</button>
          </div>
        </form>
        </>
        </div>
    );
};

export default UpdateProduct;