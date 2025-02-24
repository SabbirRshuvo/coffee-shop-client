/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router";

import Main from "../MainLayout/main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetail";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "/coffeedetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
    ],
  },
]);

export default routes;
