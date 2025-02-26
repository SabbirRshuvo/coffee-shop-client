/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router";

import Main from "../MainLayout/main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetail";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:3000/users"),
      },
    ],
  },
]);

export default routes;
