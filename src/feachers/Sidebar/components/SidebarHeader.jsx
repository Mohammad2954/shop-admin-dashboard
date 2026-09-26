import React from "react";
import { Link } from "react-router";
function SidebarHeader() {
  return (
    <Link to={"/"} className="flex items-center gap-1 border-b pb-2">
      <img src="./image/icon/header-icon.webp" alt="" />
      <h3 className="font-bold ">داشبورد ادمین</h3>
    </Link>
  );
}

export default SidebarHeader;
