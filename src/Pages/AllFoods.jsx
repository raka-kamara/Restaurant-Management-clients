import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCart from '../Components/Foods/FoodCart';

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter foods based on search query
  const filteredFoods = foodsData.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0B0B0B] p-10">
      <h1 className="text-center text-[#D3A121] text-3xl font-semibold">
        All Foods ({filteredFoods.length})
      </h1>

      <div className="flex items-center justify-center py-5">
        <label className="input input-bordered lg:w-1/5 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="grid lg:grid-cols-3 py-10 gap-10">
        {filteredFoods.map(food => (
          <FoodCart key={food._id} food={food}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
