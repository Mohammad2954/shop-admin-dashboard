import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Sidebar from "../../feachers/Sidebar/Sidebar";
import Topbar from "../../feachers/Topbar/Topbar";

function Layout() {
  return (
    <main className="flex">
      <Sidebar />
      <section>
        <Topbar />
        <Outlet />
      </section>
      <ScrollRestoration />
    </main>
  );
}

export default Layout;
