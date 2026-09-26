import React from "react";
import { NavLink } from "react-router";

import clsx from "clsx";

function ItemMenue({ href, icon: Icon, title }) {
  return (
    <li className=" mb-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg   group">
      <NavLink
        to={href}
        className={({ isActive }) => {
          return clsx(
            isActive ? "bg-gray-200" : "",
            "px-3 py-2 flex items-center gap-2 rounded-lg",
          );
        }}
      >
        {({ isActive }) => {
          return (
            <>
              <Icon
                className={` group-hover:text-green-600 transition duration-500 ${isActive ? "text-green-600" : ""}`}
              />

              {title}
            </>
          );
        }}
      </NavLink>
    </li>
  );
}

export default ItemMenue;
