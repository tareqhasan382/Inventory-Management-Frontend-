import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../components/Home";

import Register from "../components/Register";
import NotFound from "../components/NotFound";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Login from "../components/Login";
import EditProfile from "../components/EditProfile";
import AddProduct from "../components/AddProduct";
import AllProducts from "../components/AllProducts";
import DetailsProduct from "../components/DetailsProduct";
// import Login from "../components/Login";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <DetailsProduct />,
      },
      {
        path: "/editProfile/:id",
        element: <EditProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashboardHome />,
  //     },
  //   ],
  // },
]);
export default routes;
