import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "@style/tailwind.css";
import "@style/globals.less";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
