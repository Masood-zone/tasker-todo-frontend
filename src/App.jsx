import React from "react";
import { rootRoutes } from "./pages";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={rootRoutes} />
      <Toaster />
    </div>
  );
}

export default App;
