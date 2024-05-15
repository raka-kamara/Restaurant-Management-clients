import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllFoods from "../Pages/AllFoods";
import DetailsFood from "../Components/Foods/DetailsFood";
import MyProfile from "../Pages/MyProfile";
import AddFood from "../Pages/AddFood";
import MyOrderedFood from "../Pages/MyOrderedFood";
import MyAddedFood from "../Pages/MyAddedFood";
import Purchase from "../Pages/Purchase";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../Pages/Gallery";
import Edit from "../Pages/Edit";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/registration",
            element: <Registration></Registration>,
        },
        {
            path: "/myProfile",
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute> ,
        },
        {
            path: "/addFood",
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>,
            loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`),
        },
        {
            path: "/myOrderedFood",
            element: <PrivateRoute><MyOrderedFood></MyOrderedFood></PrivateRoute>,
        },
        {
            path: "/edit/:id",
            element: <PrivateRoute><Edit></Edit></PrivateRoute>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        },
        {
            path: "/myAddedFood",
            element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
        },
        {
            path: "/purchase/:id",
            element: <Purchase></Purchase>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        },
        {
            path: "/detailsFood/:id",
            element: <PrivateRoute><DetailsFood></DetailsFood></PrivateRoute>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        },
        {
            path: "/allFoods",
            element: <AllFoods></AllFoods>,
            loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`),
        },
      ]
    },
  ]);

export default router;