import React from "react";
import ReactDOM from "react-dom/client";
// @ts-expect-error: Allow importing CSS as a side-effect in this entry file
import "./styles/globals.css";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "./app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);