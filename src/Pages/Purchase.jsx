import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import toast from "react-hot-toast";



const Purchase = () => {
    const purchasing = useLoaderData();

    const{user} = useContext(AuthContext);    

    const handleSubmission = async event =>{
        event.preventDefault()
        if (user?.email === purchasing.email)
            return toast.error('You can not buy your own product!')
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const date = form.date.value;

        const newFood = {name,  quantity, price, date, userName, email};
        console.log(newFood)

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/purchase`,
              newFood
            )
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Purchase Successful!',
                text: 'Your purchase has been successfully submitted.',
            });
          } catch (err) {
            console.log(err)
            console.log('Something went wrong', err.message)
          }
        
    }
    return (
        <div>
            <section className="my-10 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form onSubmit={handleSubmission}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Food Name</label>
                            <input id="name" name="name" type="text" defaultValue={purchasing.name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="category">Date</label>
                            <input id="date" name="date" type="date"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Available Quantity</label>
                            <input id="quantity" name="quantity" type="text" defaultValue={purchasing.quantity} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
                            <input id="price" name="price" type="text"  defaultValue={purchasing.price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="userName">User Name</label>
                            <input id="userName" name="userName" type="text" defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="email">User Email</label>
                            <input id="email" name="email" defaultValue={user?.email} type="text" placeholder="country origin" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
                    </div>
                </form>
            </section>
        </div>    );
};

export default Purchase;