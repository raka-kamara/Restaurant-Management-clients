import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyAddedFood = () => {

    const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState("All");


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, [user]);

 

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/food/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your painting has been deleted.", "success");
              const remaining = items.filter((cof) => cof._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  const handleFilterChange = (category) => {
    if (category === "All") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) =>
          item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
    setSelectedcategory(category);
  };

    return (
        <div>
            <div>
        <label htmlFor="category" className="font-bold">
          Filter by category:
        </label>
        <select
          id="category"
          value={selectedcategory}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {filteredItems.map((p) => (
        <div className="card card-side bg-base-100 shadow-xl mt-5" key={p._id}>
          <figure>
            <img className="h-52 w-52" src={p.photo} alt="Painting" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {p.name}</h2>
            <h2 className="card-title">Price: {p.price}</h2>
            <p>Description: {p.description}</p>
            <p>category: {p.category}</p>
            <div className="card-actions ">
              <Link to={`/update/${p._id}`}>
                <button className="btn">View Details</button>
              </Link>
              <Link to={`/details/${p._id}`}><button  className="btn">Edit</button></Link>
              <button
                onClick={() => handleDelete(p._id)}
                className="btn bg-orange-500"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
        </div>
    );
};

export default MyAddedFood;