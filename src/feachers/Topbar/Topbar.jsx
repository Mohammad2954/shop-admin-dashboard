import React from "react";
import Searchbar from "./components/Searchbar";
import Announcement from "./components/Announcement";
import Profile from "./components/Profile";

function Topbar() {
  return (
    <>
      <div>
        <div>
          <Searchbar />
        </div>
        <div>
          <Announcement />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Topbar;
