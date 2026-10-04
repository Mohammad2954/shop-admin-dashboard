import React from "react";
import SummeryCard from "./SummeryCard";
import { AiOutlineProduct } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { IoTicket } from "react-icons/io5";
import { FcManager } from "react-icons/fc";

function Summery() {
  const dashboardData = [
    {
      id: 1,
      title: "تعداد محصولات",
      count: 12,
      label: <AiOutlineProduct className="size-6 text-green-800" />,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      count: 32,
      label: <HiUsers className="size-6 text-green-800" />,
    },
    {
      id: 3,
      title: "تعداد تیکت‌ها",
      count: 5,
      label: <IoTicket className="size-6 text-green-800" />,
    },
    {
      id: 4,
      title: "تعداد مدیران",
      count: 4,
      label: <FcManager className="size-6 text-green-800" />,
    },
  ];
  return (
    <div className="grid mt-10 grid-cols-2 lg:grid-cols-4 gap-8">
      {dashboardData.map((e) => (
        <SummeryCard key={e.id} {...e} />
      ))}
    </div>
  );
}

export default Summery;
