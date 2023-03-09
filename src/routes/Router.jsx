import { createBrowserRouter } from "react-router-dom"
import About from "../pages/About"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import House from "../pages/House"
import Root from "../pages/Root"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "house/:houseId",
        element: <House />,
      },
    ],
  },
])
