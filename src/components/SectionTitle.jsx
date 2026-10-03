import React from "react";

function SectionTitle({ title, Buttons, CalBtn }) {
  return (
    <div className="pt-10 flex items-center justify-between">
      <span className="text-2xl font-bold">{title}</span>
      <div
        onClick={CalBtn}
        className="border border-green-600 bg-green-600 text-white py-2 px-4 rounded-lg cursor-pointer text-sm font-bold hover:bg-green-700 transition-all duration-300 ease-in "
      >
        {Buttons}
      </div>
    </div>
  );
}

export default SectionTitle;
