import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Detail from "./pages/detail/Detail";
import Movie from "./pages/movie/Movie";
import Company from "./pages/company/Company";
import Template from "./Template";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:media_type/:movie_id",
        element: <Detail />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/company/:company_id",
        element: <Company />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
