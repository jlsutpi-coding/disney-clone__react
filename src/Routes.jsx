import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MovieDetail from "./pages/MovieDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:media_type/:movie_id",
    element: <MovieDetail />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
