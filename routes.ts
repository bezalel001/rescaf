import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Culture from "./pages/Culture";
import DiscoverHavilah from "./pages/DiscoverHavilah";
import DiscoverNile from "./pages/DiscoverNile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/culture",
    Component: Culture,
  },
  {
    path: "/discover-havilah",
    Component: DiscoverHavilah,
  },
  {
    path: "/discover-nile",
    Component: DiscoverNile,
  },
]);