import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import House from "./pages/House"
import ErrorPage from "./pages/ErrorPage"
import Root, { getDatas } from "./pages/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getDatas,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getDatas,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "house/:houseId",
        element: <House />,
        loader: getDatas,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
