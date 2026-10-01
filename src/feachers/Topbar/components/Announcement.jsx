import React from "react";
import { MdOutlineAnnouncement } from "react-icons/md";

function Announcement() {
  return (
    <div className="relative overflow-hidden border border-gray-200 p-2 rounded-full hover:rounded-sm cursor-pointer group ">
      <span className="absolute inset-0 bg-green-400 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-sm"></span>

      <MdOutlineAnnouncement className="relative z-10 size-6" />
    </div>
  );
}

export default Announcement;
