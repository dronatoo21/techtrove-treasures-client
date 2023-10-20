const AddCart = () => {

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
    console.log(newProduct);
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
            <input type="text" placeholder="ratings" name="ratings" className="input  w-3/5 mx-auto input-bordered" required />
        </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral w-3/5 mx-auto">Add Product</button>
          </div>
        </form>
        </>
    );
};

export default AddCart;