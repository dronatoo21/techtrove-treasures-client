import { useState } from "react";
import Swal from "sweetalert2";
const AddProducts = () => {

  const [ratingSelect, setRatingSelect] = useState();

  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imgUrl.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDes = form.shortDes.value;
    const ratings = form.ratings.value;
    const newProduct = {imageUrl, name, brandName, type, price, shortDes, ratings}

    // send data to server
    fetch('https://techtrove-treasures-server-swart.vercel.app//product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Product added successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
      }
    })
}

    return (
    <>
        <h1 className="font-bold text-3xl text-center mt-16">Please Add Product</h1>
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <input type="text" name="imgUrl" placeholder="Image url" className="input w-3/5 mx-auto input-bordered" required />
            <input type="text" name="name" placeholder="Name" className="my-2 input w-3/5 mx-auto input-bordered" required />
            <input type="text" name="brandName" placeholder="Brand Name" className="input  w-3/5 mx-auto input-bordered" required />
            <input type="text" name="type" placeholder="Type" className="input my-2 w-3/5 mx-auto input-bordered" required />
            <input type="text" name="price" placeholder="Price" className="input  w-3/5 mx-auto input-bordered" required />
            <textarea placeholder="Short Description" name="shortDes" className="textarea textarea-bordered textarea-sm w-3/5 mx-auto my-2" required />
            <select value={ratingSelect} onChange={e => setRatingSelect(e.target.value)} className="input mb-2 w-3/5 mx-auto input-bordered" name="ratings" id="">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral w-3/5 mx-auto">Add Product</button>
          </div>
        </form>
        </>
    );
};

export default AddProducts;