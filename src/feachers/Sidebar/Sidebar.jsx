import React from "react";
import SidebarHeader from "./components/SidebarHeader";
import MenuSidebar from "./components/MenuSidebar";

function Sidebar() {
  return (
    <div className="w-60 sticky z-10 h-screen top-0 border-l border-gray-200 bg-white p-6">
      <SidebarHeader />
      <MenuSidebar />
    </div>
  );
}

export default Sidebar;
