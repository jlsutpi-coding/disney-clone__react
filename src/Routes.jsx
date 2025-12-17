import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import DiscoverPage from "./pages/discover/DiscoverPage.jsx";
import MoviePage from "./pages/movie/MoviePage.jsx";
import Detail from "./pages/detail/Detail.jsx";
import SeriesPage from "./pages/series/SeriesPage.jsx";
import Company from "./pages/discover/Company.jsx";
import Template from "./Template.jsx";

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
        element: <MoviePage />,
      },
      {
        path: "/discover/:company_id",
        element: <Company />,
      },
      {
        path: "/discover",
        element: <DiscoverPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "tv",
        element: <SeriesPage />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
