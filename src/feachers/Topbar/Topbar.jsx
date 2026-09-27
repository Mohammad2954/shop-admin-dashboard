import React from "react";
import Searchbar from "./components/Searchbar";
import Announcement from "./components/Announcement";
import Profile from "./components/Profile";

function Topbar() {
  return (
    <>
      <div className="flex items-center justify-between px-6 mt-4 pb-4 border-b border-gray-200">
        <div>
          <Searchbar />
        </div>
        <div className="flex items-center gap-4">
          <Announcement />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Topbar;
