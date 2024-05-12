import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllFoods from "../Pages/AllFoods";
import DetailsFood from "../Components/Foods/DetailsFood";

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
            path: "/detailsFood/:id",
            element: <DetailsFood></DetailsFood>,
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