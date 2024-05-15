import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Gallery = () => {
  const { user } = useContext(AuthContext);
  const foodsData = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(!isModalOpen);
  };
  const handleSubmission = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const feedback = form.feedback.value;

    const Feedback = { name, feedback };

    fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Feedback)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Feedback added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div>
      <Helmet>
        <title>FlouriciousBites | Gallery</title>
      </Helmet>
      <div className="w-full flex justify-center items-center m-10">
        <div className="w-full grid md:grid-cols-3 gap-10">
          {foodsData.map((food, index) => (
            <div key={index} className="food-item">
              <div className="">
                <img
                  className="w-9/12 rounded-xl h-96 "
                  src={food.image}
                  alt=""
                  title={user ? `User: ${user.displayName}\n The food tasted really good` : ''}
                  
                />
                <button
                  onClick={() => toggleModal(food)}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && user && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <form onSubmit={handleSubmission}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="name"
                  >
                    User Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    defaultValue={user?.displayName}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="feedback"
                  >
                    Add Feedback
                  </label>
                  <input
                    id="feedback"
                    name="feedback"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Add Feedback
                  </button>
                </div>
              </div>
            </form>

            <button
              onClick={() => toggleModal(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
