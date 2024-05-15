
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Edit = () => {
    const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (event) =>{
    event.preventDefault();      
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    
    const info = {name, price,  quantity, photo}
    fetch(`${import.meta.env.VITE_API_URL}/updateProduct/${id}`,{
        method:"PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res=> res.json())
    .then(data =>{

       console.log(data);
       if(data){
        Swal.fire({
            title: 'Success!',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
     }
})

  }

    return (
        <div className="my-10">
      <h1 className="text-center text-yellow-400 font-bold text-2xl my-5">Update Form</h1>
      <form onSubmit={handleUpdate} action="" className="p-10 border shadow-2xl rounded-3xl">
        <div className="md:flex mb-8 ">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={product.name}
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={product.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
   
        {/* form stock and photo row */}
        <div className="md:flex mb-8">
          <div className="form-control w-full  md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={product.quantity}
                placeholder="In stock/ made to order"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={product.image}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Food"
          className="btn btn-block "
        />
      </form>
    </div>
    );
};

export default Edit;