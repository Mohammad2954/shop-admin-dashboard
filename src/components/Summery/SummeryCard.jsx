import React from "react";

function SummeryCard({ title, count, label }) {
  return (
    <div className=" h-34 border-2 border-gray-300 flex flex-col justify-around p-4 rounded-lg shadow-2xl bg-white">
      <div className="flex items-center justify-between">
        <span className="font-extrabold text-xl">{title}</span>
        <div className="border-2 rounded-sm p-1 flex items-center justify-center border-gray-200">
          {label}
        </div>
      </div>
      <div className="flex gap-1 items-end">
        <span className="text-3xl font-bold"> {count}</span>
        عدد
      </div>
    </div>
  );
}

export default SummeryCard;
