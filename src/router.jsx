import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import TicketDetail from "./pages/TicketDetails/page";
import Comments from "./pages/Comments/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
      { path: "tickets", element: <TicketDetail /> },
      { path: "comments", element: <Comments /> },
    ],
  },
]);
export default router;
