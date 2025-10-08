import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import NotFound from "../pages/NotFound";
import AppDetails from "../pages/AppDetails";
import InstalledApp from "../pages/InstalledApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:appId",
        Component: AppDetails,
      },
      {
        path: "installed",
        Component: InstalledApp,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
