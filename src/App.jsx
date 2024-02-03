import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact, Home, Payment } from "./pages";


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/payment",
      element: <Payment/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ])
  return <>
    <RouterProvider router={route}/>
  </>;
}

export default App;
