// src/router.ts
import { createBrowserRouter, RouteObject } from "react-router";
// import { Outlet, Navigate } from "react-router";
import React from "react";
// import RootLayout from "./layouts/RootLayout";
// import ErrorPage from "./routes/ErrorPage";

// Eager pages (example)
// import Home from "./routes/Home";
// import About from "./routes/About";

// Lazy pages (example)
const AppAdminDashboard = React.lazy(() => import("../App"));
// const DashboardHome = React.lazy(() => import("./routes/dashboard/Home"));
const Settings = React.lazy(() => import("../features/AdminContent/Settings"));
// const NotFound = React.lazy(() => import("./routes/NotFound"));

// (Optional) auth gate as a layout wrapper
// function RequireAuth() {
//   const isAuthed = Boolean(localStorage.getItem("token")); // replace with real auth
//   return isAuthed ? <Outlet /> : <Navigate to="/login" replace />;
// }

const routes: RouteObject[] = [
  { path: "/settings", Component: Settings },
  {
    path: "/",
    Component: AppAdminDashboard,
    children: [
      // Protected subtree
      //   {
      //     element: <RequireAuth />, // gate children
      //     children: [
      //       {
      //         path: "dashboard",
      //         element: (
      //           <Suspense fallback={<div>Loading…</div>}>
      //             <AppAdminDashboard />
      //           </Suspense>
      //         ),
      //         children: [
      //           {
      //             index: true,
      //             element: (
      //               <Suspense fallback={<div>Loading…</div>}>
      //                 <DashboardHome />
      //               </Suspense>
      //             ),
      //           },
      //           {
      //             path: "settings",
      //             element: (
      //               <Suspense fallback={<div>Loading…</div>}>
      //                 <Settings />
      //               </Suspense>
      //             ),
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   // Login page (example, eager or lazy)
      //   { path: "login", Component: About }, // replace with real Login
    ],
  },
  //   {
  //     path: "*",
  //     element: (
  //       <Suspense fallback={<div>Loading…</div>}>
  //         <NotFound />
  //       </Suspense>
  //     ),
  //   },
];

export const router = createBrowserRouter(routes);
