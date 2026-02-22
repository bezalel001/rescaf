import Home from "./pages/Home";
import Culture from "./pages/Culture";
import DiscoverHavilah from "./pages/DiscoverHavilah";
import DiscoverNile from "./pages/DiscoverNile";

export const routeComponents = {
  "/": Home,
  "/culture": Culture,
  "/discover-havilah": DiscoverHavilah,
  "/discover-nile": DiscoverNile,
} as const;
