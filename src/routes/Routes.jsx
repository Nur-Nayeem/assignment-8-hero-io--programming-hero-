import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "apps",
        element: <h1>App</h1>,
      },
      {
        path: "installed",
        element: <h1>Installed</h1>,
      },
    ],
  },
]);
