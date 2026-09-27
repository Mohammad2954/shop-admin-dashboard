import React from "react";

function Searchbar() {
  return (
    <div>
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="w-62 rounded-lg h-8 outline-none text-sm font-bold p-2 border border-gray-300"
      />
    </div>
  );
}

export default Searchbar;
