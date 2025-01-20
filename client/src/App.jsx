import React from "react";
import { RouterProvider } from "react-router";
import {  createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <h1>Home</h1>
  },
  {
    path:"/products/:id",
    element: <h1>Category</h1>
  },
  {
    path:"/product/:id",
    element: <h1>Product</h1>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;