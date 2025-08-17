import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "@style/tailwind.css";
import "@style/globals.less";
import AppAdminDashboard from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppAdminDashboard />
  </StrictMode>
);
