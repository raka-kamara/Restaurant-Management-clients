import { Link, useLoaderData } from "react-router-dom";

const DetailsFood = () => {
  const food = useLoaderData();

  return (
    <div className="flex items-center justify-center my-10 bg-[black] p-5 rounded-3xl">
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-96"
          src={food.image}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
             Category: {food.category}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {food.name}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
             {food.description}
            </p>
            <p className="mt-2 font-bold text-sm text-gray-600 dark:text-gray-400">
             Price:  ${food.price}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                
                <p
                  
                  className=" font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  Made by: {food.userName}
                </p>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
               origin: { food.origin}
              </span>
            </div>
          </div>
          <Link to={`/purchase/${food._id}`}><button className="py-2 px-16 btn btn-sm bg-[#D3A121]">Purchase</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
