import {createRoot} from "react-dom/client";

import { createBrowserRouter ,RouterProvider } from "react-router-dom";


import Home from "./home";
import About from "./about";
import Contact from "./contact";

const root = createRoot (document.getElementById("root"));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },

  {
    path:'/about',
    element:<About/>,
  },

  {
    path:'/contact',
    element:<Contact/>,
  }
])

root.render(<RouterProvider router={router}/>)