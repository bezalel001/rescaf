import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Culture from "./pages/Culture";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/culture",
    Component: Culture,
  },
]);
