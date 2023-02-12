import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Cars } from "./components/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "cars",
    element: <Cars />,
  },
]);
