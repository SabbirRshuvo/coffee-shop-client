/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/main";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import Home from "../Components/Home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/updatecoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default routes;
