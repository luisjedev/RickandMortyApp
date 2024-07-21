import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { EpisodesRoute } from "./episodes.route";
import { EpisodeDetails } from "./episode-details.route";
import { LocationsRoute } from "./locations.route";
import { LocationDetails } from "./location-details.route";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <EpisodesRoute />,
      },
      {
        path: "/locations",
        element: <LocationsRoute />,
      },
      {
        path: "/details/episodes/:itemId",
        element: <EpisodeDetails />,
      },
      {
        path: "/details/locations/:itemId",
        element: <LocationDetails />,
      },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
