import { Link, useNavigate } from 'react-router-dom';
import img from '../../src/assets/images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { update } from 'firebase/database';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const navigate = useNavigate();
    const {  user, setUser, updateUserProfile, createUser, signIn, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const pass = form.password.value;
        console.log({email, pass, name, photo});
        try {
            const result = await createUser(email, pass);
            console.log(result);
            await updateUserProfile(name, photo);
            setUser({...user, photoURL: photo, displayName: name});
            navigate('/');
            toast.success('Signup Successful');
        } catch(err) {
            console.log(err);
            toast.error(err?.message);
        }
    };

    return (
        <div>
            <Helmet><title>FlouriciousBites | Registration</title></Helmet>
            <div  className="flex w-full max-w-sm mx-auto overflow-hidden my-12 bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl rounded-3xl">
                <div
                    className="hidden bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://i.ibb.co/n3Trxy9/signupBG.jpg')",
                    }}
                ></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <form onSubmit={handleSignUp} className="w-full max-w-md">
                        <div className="flex justify-center mx-auto">
                            <img className="w-auto h-32" src={img} alt="" />
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <Link to="/login" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                                sign in
                            </Link>

                            <Link className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                sign up
                            </Link>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input 
                                type="text"
                                name="name"
                                autoComplete="name"
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                placeholder="Username" 
                            />
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input 
                                type="text" 
                                name="photo"
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                placeholder="PhotUrl" 
                            />
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input 
                                type="email" 
                                name="email"
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                placeholder="Email address" 
                            />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input 
                                type="password" 
                                name="password"
                                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                placeholder="Password" 
                            />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>

                            <div className="mt-6 text-center ">
                                <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
