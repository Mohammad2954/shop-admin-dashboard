import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoTicketSharp } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";

function MenuSidebar() {
  return (
    <div>
      <ul>
        <p className="my-2 text-sm font-bold">منو اصلی :</p>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg px-3 py-2  group">
          {" "}
          <FaHome className=" group-hover:text-green-600 transition duration-500" />
          داشبورد{" "}
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg px-3 py-2  group">
          {" "}
          <FaBasketShopping className=" group-hover:text-green-600 transition duration-500" />
          محصولات
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg px-3 py-2  group">
          <HiUsers className=" group-hover:text-green-600 transition duration-500" />
          کاربران
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg px-3 py-2  group">
          <IoTicketSharp className=" group-hover:text-green-600 transition duration-500" />
          تیکت ها
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition duration-500 rounded-lg px-3 py-2  group">
          <VscCommentDiscussion className=" group-hover:text-green-600 transition duration-500" />
          کامنت ها
        </li>
      </ul>
    </div>
  );
}

export default MenuSidebar;
