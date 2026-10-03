import React from "react";

function SectionTitle({ title, Buttons }) {
  return (
    <div className="mt-10 flex items-center justify-between">
      <span className="text-2xl font-bold">{title}</span>
      <div className="border border-green-600 bg-green-600 text-white py-2 px-4 rounded-lg cursor-pointer text-sm font-bold hover:bg-green-700">
        {Buttons}
      </div>
    </div>
  );
}

export default SectionTitle;
