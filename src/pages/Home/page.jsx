import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router";
import Summery from "../../components/Summery/Summery";
import ChartDetails from "../../feachers/ChartDetails/ChartDetails";

const data = [
  { name: "تعداد محصولات", value: 34 },
  { name: "تعداد کاربران", value: 85 },
  { name: "تعداد تیکت‌ها", value: 14 },
  { name: "تعداد مدیران", value: 4 },
];

function Home() {
  const isRedirect = useNavigate();
  const CalBtn = () => {
    isRedirect("/products");
  };
  return (
    <div className="px-8">
      <SectionTitle CalBtn={CalBtn} title={"داشبورد"} Buttons={"ایجاد محصول"} />
      <Summery />
      <div>
        <ChartDetails data={data} />
      </div>
    </div>
  );
}

export default Home;
