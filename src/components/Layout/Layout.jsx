import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Sidebar from "../../feachers/Sidebar/Sidebar";
import Topbar from "../../feachers/Topbar/Topbar";
import Summery from "../Summery/Summery";

function Layout() {
  return (
    <>
      <main className="flex ">
        <Sidebar />
        <section className="w-full">
          <Topbar />
          <div className="relative ">
            {/* <div className="bg-sky-300 w-52 h-52 top-[50%] right-1/2 absolute "></div> */}
            <div className=" absolute -z-10 top-0 left-0 right-0 h-screen bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            <Summery />
            <Outlet />
          </div>
        </section>
        <ScrollRestoration />
      </main>
    </>
  );
}

export default Layout;
